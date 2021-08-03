import styled from 'styled-components';
import { ButtonBaseProps, ButtonSizes } from '../types';

type IconWrapperProps = Pick<ButtonBaseProps, 'buttonSize' | 'iconPosition'>;

const iconPadding = (size?: ButtonSizes) => {
  switch (size) {
    case 48:
      return 16;
    case 40:
      return 16;
    case 32:
      return 12;
    default:
      return 16;
  }
};

const IconWrapper = styled('span')<IconWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${props =>
    props.iconPosition === 'right'
      ? `right: ${iconPadding(props.buttonSize)}px;`
      : `left: ${iconPadding(props.buttonSize)}px;`}

  & i {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }
`;

export default IconWrapper;
