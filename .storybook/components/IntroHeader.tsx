import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

const IntroHeader = styled('header')`
  margin-bottom: ${variables.spaces.space3};
  text-align: center;

  img {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${variables.spaces.space3};
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
  }

  strong {
    font-weight: 700;
  }
`;

export default IntroHeader;
