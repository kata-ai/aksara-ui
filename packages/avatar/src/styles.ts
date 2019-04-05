import { css } from 'styled-components';
import { defaultTheme } from './theme';

export interface AvatarBaseProps {
  /** Size of the avatar. */
  size?: number;
}

const styles = (props: AvatarBaseProps) =>
  css`
    display: inline-block;
    position: relative;
    width: ${props.size}px;
    height: ${props.size}px;
    border: 1px solid ${defaultTheme.borderColor};
    border-radius: 50%;
    background: ${defaultTheme.backgroundColor};
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

export default styles;
