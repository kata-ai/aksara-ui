import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface SidebarMainMenuProps extends NavLinkProps {
  className?: string;
  icon: string;
}

const SidebarMainMenu: React.SFC<SidebarMainMenuProps> = ({
  className,
  icon,
  children,
  ...rest
}) => (
  <Root className={classnames(className)} activeClassName="is-active" {...rest}>
    <Icon>
      <i className={`icon-${icon}`} />
    </Icon>
    <Span>{children}</Span>
  </Root>
);

export default SidebarMainMenu;

const Icon = styled('div')`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: calc(0.615384615rem /* $space-1 */ / 2);
  padding: 10px;
  font-size: 20px;
  color: #676b6d;
  border-radius: 4px /* $border-radius-small */;
`;

const Span = styled('span')`
  color: #676b6d;
`;

const Root = styled(NavLink)`
  margin: 0 0 16px;
  padding: 4px 0;
  font-size: 12px;
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.3s ease;

  & .main-menu-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: calc(0.615384615rem /* $space-1 */ / 2);
    padding: 10px;
    font-size: 20px;
    border-radius: 4px /* $border-radius-small */;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: #676b6d /* $gray-60 */;

    & ${Icon} {
      background: #484c4f /* $gray-70 */;
      color: #949a9d /* $gray-50 */;
    }
  }

  &:focus {
    outline: 0;
  }

  &.is-active {
    ${Span} {
      color: #fff /* $white */;
    }

    ${Icon} {
      background: #006fe6 /* $kata-blue */;
      color: #fff /* $white */;
    }
  }
`;
