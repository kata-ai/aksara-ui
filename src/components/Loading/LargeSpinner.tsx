import React, { SFC } from 'react';

import './LargeSpinner.scss';

interface Props {}

const LargeSpinner: SFC<Props> = (props: Props) => {
  return (
    <div className="spinner">
      <span className="ball-1" />
      <span className="ball-2" />
      <span className="ball-3" />
      <span className="ball-4" />
      <span className="ball-5" />
      <span className="ball-6" />
      <span className="ball-7" />
      <span className="ball-8" />
    </div>
  );
};

export default LargeSpinner;
