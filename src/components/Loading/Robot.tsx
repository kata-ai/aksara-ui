import React, { SFC } from 'react';

import Loader from '../../assets/images/loader.svg';
import './Robot.scss';

interface Props {}

const Robot: SFC<Props> = (props: Props) => {
  return (
    <div className="loading-container">
      <img src={Loader} alt="" />
    </div>
  );
};

export default Robot;
