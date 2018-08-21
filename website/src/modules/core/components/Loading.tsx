import * as React from 'react';
import styled from 'styled-components';
import { LoadingComponentProps } from 'react-loadable';

import { Robot } from '@kata-kit/loading';
import { Button } from '@kata-kit/button';

const Loading = (props: LoadingComponentProps) => {
  if (props.error) {
    return (
      <LoadingContainer>
        <p>An error occured while loading the component.</p>{' '}
        <Button color="danger" onClick={props.retry}>
          Retry
        </Button>
      </LoadingContainer>
    );
  } else {
    return <Robot />;
  }
};

export default Loading;

const LoadingContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  text-align: center;
`;
