import React, { SFC } from 'react';

import Loader from '../../assets/images/loader.svg';
import './Robot.scss';

// const Loader = require('../../assets/images/loader.svg');

interface Props {}

const Robot: SFC<Props> = (props: Props) => {
  return (
    <div className="loading-container">
      <img src={Loader} alt="" />
    </div>
  );
};

export default Robot;
