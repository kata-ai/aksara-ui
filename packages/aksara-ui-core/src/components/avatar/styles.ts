import { css } from 'styled-components';
import { colors } from '../../utils';

export interface AvatarBaseProps {
  /** Size of the avatar. */
  size?: number;
}

export const AvatarBase = ({ size = 40 }: AvatarBaseProps) =>
  css`
    display: inline-block;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${colors.gray30};
    border-radius: 50%;
    background: ${colors.gray10};
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
