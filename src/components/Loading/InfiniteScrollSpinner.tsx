import React from 'react';
import classnames from 'classnames';

import './InfiniteScrollSpinner.scss';

interface Props {
  bsStyle?: string;
  sm?: boolean;
  lg?: boolean;
}

const InfiniteScrollSpinner: React.SFC<Props> = props => {
  const classname = classnames(
    'infinite-scroll-spinner',
    props.bsStyle && `infinite-scroll-spinner--${props.bsStyle}`,
    props.sm && 'infinite-scroll-spinner--small',
    props.lg && 'infinite-scroll-spinner--large'
  );
  return (
    <div className={classname}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  );
};

export default InfiniteScrollSpinner;
