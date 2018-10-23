import * as React from 'react';
import styled, { css } from 'styled-components';

import { InputAddonBase } from '../styles';

interface InputAddonProps {
  className?: string;
  isIcon?: boolean;
}

const InputAddon: React.SFC<InputAddonProps> = ({
  className,
  isIcon,
  children
}) => (
  <Div className={className}>
    <Inner isIcon={isIcon}>{children}</Inner>
  </Div>
);

export default InputAddon;

const IsIconStyles = css`
  i:before {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Div = styled('div')`
  ${props => InputAddonBase(props)};
`;

const Inner = styled<InputAddonProps, 'span'>('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  padding: 0;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e2e6e8;
  background-color: #f6f7f8;
  border-radius: 6px;

  /* TODO: prepend/append */
  margin-right: -1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${props => props.isIcon && IsIconStyles};
`;
