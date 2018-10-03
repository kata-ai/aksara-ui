import * as React from 'react';
import styled from 'styled-components';

const Loader = require('../images/loader.svg');

export interface RobotLoadingProps {}

const Robot: React.SFC<RobotLoadingProps> = props => {
  return (
    <LoadingContainer>
      <img src={Loader} alt="" />
    </LoadingContainer>
  );
};

export default Robot;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  height: 160px;
  width: 200px;
  transform: translate(-50%, -50%);
`;
