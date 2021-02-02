import { css } from 'styled-components';
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  variant,
} from 'styled-system';

import { theme } from '../../theme';
import avatarColors from './theme';

export interface AvatarBaseProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  /** Size of the avatar. */
  size?: 24 | 32 | 40;
  /** Extended color props. We need this because default `color` prop clashes with `styled-system`. */
  color?: keyof typeof avatarColors;
  /** Avatar icon type. Icon only shows when no initials are set */
  type?: 'user' | 'team';
  /** Avatar shape, rounded or circular. */
  shape?: 'rounded' | 'rectangular';
  /** Force rendering of avatar type icons */
  forceRenderIcon?: boolean;
  /** Name for initials */
  name?: string;
}

export const AvatarBase = ({ size = 40 }: AvatarBaseProps) =>
  css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${theme.colors.white};
    border-radius: ${size}px;
    ${variant({
      prop: 'color',
      variants: avatarColors,
    })}
    font-size: 1rem;
    line-height: 1;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${layout}
    ${position}
    ${flexbox}
    ${grid}
    ${space}
  `;
