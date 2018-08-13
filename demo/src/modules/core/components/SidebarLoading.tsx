import * as React from 'react';
import styled from 'styled-components';
import { LoadingComponentProps } from 'react-loadable';

import { Circle } from '@kata-kit/loading';
import { SidebarSub } from '@kata-kit/layout';
import { variables } from '@kata-kit/theme';

const SidebarLoading = (props: LoadingComponentProps) => {
  if (props.error) {
    return (
      <SidebarSub>
        Error! <button onClick={props.retry}>Retry</button>
      </SidebarSub>
    );
  } else {
    return (
      <SidebarSub>
        <Loader />
      </SidebarSub>
    );
  }
};

export default SidebarLoading;

const Loader = styled(Circle)`
  svg path,
  svg rect {
    fill: ${variables.colors.kataBlue};
  }
`;
