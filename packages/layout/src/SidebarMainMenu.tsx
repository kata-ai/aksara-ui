import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface SidebarMainMenuProps extends NavLinkProps {
  className?: string;
  icon: string;
}

const SidebarMainMenu: React.SFC<SidebarMainMenuProps> = props => (
  <Root
    className={classnames(props.className)}
    activeClassName="is-active"
    {...props}
  >
    <div className="main-menu-icon">
      <i className={`icon-${props.icon}`} />
    </div>
    {props.children}
  </Root>
);

export default SidebarMainMenu;

const Root = styled(NavLink)`
  padding: 0.615384615rem /* $space-1 */ 0 12px;
  font-size: 12px;
  display: block;
  color: #676b6d /* $gray-60 */;
  text-decoration: none;

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

    & .main-menu-icon {
      background: #484c4f /* $gray-70 */;
      color: #949a9d /* $gray-50 */;
    }
  }

  &.is-active {
    color: #fff /* $white */;

    &:hover,
    &:focus {
      color: #fff /* $white */;
    }

    .main-menu-icon {
      background: #006fe6 /* $kata-blue */;
      color: #fff /* $white */;
    }
  }
`;
