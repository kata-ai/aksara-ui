import * as React from 'react';
import styled from 'styled-components';

import { Circle } from '@kata-kit/loading';
import { SidebarSub } from '@kata-kit/layout';
import { variables } from '@kata-kit/theme';

const SidebarLoading = () => {
  return (
    <SidebarSub>
      <LoadingContainer>
        <Loader />
      </LoadingContainer>
    </SidebarSub>
  );
};

export default SidebarLoading;

const LoadingContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Loader = styled(Circle)`
  svg path,
  svg rect {
    fill: ${variables.colors.kataBlue};
  }
`;
