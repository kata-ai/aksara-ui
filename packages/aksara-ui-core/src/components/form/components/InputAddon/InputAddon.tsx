import * as React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../../../../foundations';
import { theme } from '../../../../theme';

export interface InputAddonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** True if an icon is used as addon instead of text. */
  isIcon?: boolean;
}

const IsIconStyles = css`
  width: 40px;

  i:before {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Div = styled('div')`
  display: flex;
`;

const Inner = styled('span')<InputAddonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${theme.colors.grey04};
  background-color: ${theme.colors.grey03};
  border-radius: 4px;
  user-select: none;

  /* TODO: prepend/append */
  margin-right: -1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${props => props.isIcon && IsIconStyles};
`;

const InputAddon: React.FC<InputAddonProps> = ({ className, isIcon, children, ...rest }) => (
  <Div className={className}>
    <Inner isIcon={isIcon} className={className} {...rest}>
      {isIcon ? children : <Text scale={300}>{children}</Text>}
    </Inner>
  </Div>
);

InputAddon.displayName = 'InputAddon';

export default InputAddon;
