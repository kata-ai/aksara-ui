import styled from 'styled-components';
import { Circle } from '../../../../loading';
import { ButtonSizes } from '../types';

interface LoaderCircleProps {
  buttonSize?: ButtonSizes;
}

const loadingIconPadding = (size?: ButtonSizes) => {
  switch (size) {
    case 48:
      return 20;
    case 40:
      return 16;
    case 32:
      return 12;
    default:
      return 16;
  }
};

const LoaderCircle = styled(Circle)<LoaderCircleProps>`
  position: absolute;
  left: ${props => `calc(50% - ${loadingIconPadding(props.buttonSize)}px)`};
  top: ${props => `calc(50% - ${loadingIconPadding(props.buttonSize)}px)`};
`;

export default LoaderCircle;
