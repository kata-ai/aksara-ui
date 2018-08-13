import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';

import { Robot } from '@kata-kit/loading';

const Loading = (props: LoadingComponentProps) => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else {
    return (
      <div>
        <Robot />
      </div>
    );
  }
};

export default Loading;
