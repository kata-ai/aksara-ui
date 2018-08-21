import * as React from 'react';
import styled from 'styled-components';
import { LoadingComponentProps } from 'react-loadable';

import { Circle } from '@kata-kit/loading';
import { SidebarSub } from '@kata-kit/layout';
import { variables } from '@kata-kit/theme';
import { Button } from '@kata-kit/button';

const SidebarLoading = (props: LoadingComponentProps) => {
  if (props.error) {
    return (
      <SidebarSub>
        <LoadingContainer>
          <p>An error occured.</p>{' '}
          <Button color="danger" onClick={props.retry}>
            Retry
          </Button>
        </LoadingContainer>
      </SidebarSub>
    );
  } else {
    return (
      <SidebarSub>
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      </SidebarSub>
    );
  }
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
