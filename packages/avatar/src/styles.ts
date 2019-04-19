import { ThemeAttributes } from '@kata-kit/theme';
import { css } from 'styled-components';

export interface AvatarBaseProps {
  /** Size of the avatar. */
  size?: number;
  theme: ThemeAttributes;
}

export const AvatarBase = (props: AvatarBaseProps) =>
  css`
    display: inline-block;
    position: relative;
    width: ${props.size}px;
    height: ${props.size}px;
    border: 1px solid ${props.theme.borderColor};
    border-radius: 50%;
    background: ${props.theme.backgroundColor};
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
  `;
