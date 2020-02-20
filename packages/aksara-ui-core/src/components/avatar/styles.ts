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
  background,
  BackgroundProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

import { colors, radii } from '../../utils';

export interface AvatarBaseProps
  extends LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    ShadowProps {
  /** Size of the avatar. */
  size?: 24 | 32 | 40;
  /** Extended color props. We need this because default `color` prop clashes with `styled-system`. */
  color?: string;
  /** Avatar type, rounded or circular. */
  type?: 'rounded' | 'rectangular';
}

export const AvatarBase = ({ size = 40, type = 'rounded' }: AvatarBaseProps) =>
  css`
    display: inline-block;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${colors.white};
    border-radius: ${type === 'rounded' ? size : radii.xs}px;
    background: ${colors.turquoise05};
    font-size: 1rem;
    line-height: 1;
    vertical-align: middle;
    overflow: hidden;

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
    ${background}
    ${color}
    ${typography}
    ${border}
    ${shadow}
  `;
