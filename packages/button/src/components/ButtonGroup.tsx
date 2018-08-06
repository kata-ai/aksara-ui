import React from 'react';
import styled from 'styled-components';

interface ButtonGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export default class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    const { children, ...rest } = this.props;

    return <Root {...rest}>{children}</Root>;
  }
}

const Root = styled('div')`
  button,
  a {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
