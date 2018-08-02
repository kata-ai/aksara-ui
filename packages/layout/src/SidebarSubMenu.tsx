import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

export interface SidebarSubMenuProps extends NavLinkProps {
  className?: string;
  to: string;
  exact?: boolean;
  icon: string;
}

const SidebarSubMenu: React.SFC<SidebarSubMenuProps> = ({
  className,
  icon,
  children,
  ...rest
}) => (
  <Root className={className} activeClassName="is-active" {...rest}>
    <SubMenuIcon className={`icon-${icon}`} /> {children}
  </Root>
);

export default SidebarSubMenu;

const Root = styled(NavLink)`
  display: block;
  min-height: 35px;
  padding: 6px 8px;
  color: #484c4f /* $gray-70 */;
  text-decoration: none;
  margin-bottom: 0.615384615rem /* $space-1 */;
  border-radius: 6px /* $border-radius-medium */;

  &:hover {
    text-decoration: none;
    background-color: #f6f7f8 /* $gray-10 */;
    color: #484c4f /* $gray-70 */;
  }

  &:active {
    background: #484c4f /* $gray-70 */;
    color: #fff /* $white */;
  }
`;

const SubMenuIcon = styled('i')`
  margin-right: 1.230769231rem /* $space-2 */;
  font-size: 20px;
  line-height: 1em;
  vertical-align: middle;
`;
