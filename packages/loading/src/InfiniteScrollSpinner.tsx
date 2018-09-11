import * as React from 'react';
import classnames from 'classnames';
import styled, { keyframes } from 'styled-components';

export interface InfiniteScrollSpinnerProps {
  bsStyle?: 'primary' | 'gray' | 'white';
  sm?: boolean;
  lg?: boolean;
}

const InfiniteScrollSpinner: React.SFC<InfiniteScrollSpinnerProps> = props => {
  const classname = classnames(props.bsStyle);

  return (
    <Wrapper
      bsStyle={props.bsStyle}
      sm={props.sm}
      lg={props.lg}
      className={classname}
    >
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </Wrapper>
  );
};

InfiniteScrollSpinner.defaultProps = {
  bsStyle: 'gray'
};

export default InfiniteScrollSpinner;

const bounceDelay = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
`;

interface WrapperProps {
  bsStyle?: string;
  sm?: boolean;
  lg?: boolean;
}

const Wrapper = styled<WrapperProps, 'div'>('div')`
  width: auto;
  display: inline-block;
  text-align: center;

  > div {
    width: ${props => (props.lg ? '15px' : props.sm ? '5px' : '8px')};
    height: ${props => (props.lg ? '15px' : props.sm ? '5px' : '8px')};
    background-color: #24282d;
    margin: 0 3px;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${bounceDelay} 1.6s infinite ease-in-out both;
    animation: ${bounceDelay} 1.6s infinite ease-in-out both;
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  &.primary > div {
    background-color: #2a90ff;
  }

  &.gray > div {
    background-color: #949a9d;
  }

  &.white > div {
    background-color: #fff;
  }
`;
