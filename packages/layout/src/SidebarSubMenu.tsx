import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

export interface SidebarSubMenuProps extends NavLinkProps {
  className?: string;
  to: string;
  exact?: boolean;
  icon?: string;
}

const SidebarSubMenu: React.SFC<SidebarSubMenuProps> = ({
  className,
  icon,
  children,
  ...rest
}) => (
  <Root className={className} activeClassName="is-active" {...rest}>
    {icon ? (
      <Span>
        <SubMenuIcon className={`icon-${icon}`} /> {children}
      </Span>
    ) : (
      <Span>{children}</Span>
    )}
  </Root>
);

export default SidebarSubMenu;

const Span = styled('span')`
  font-size: 1rem;
  color: ${variables.colors.gray70};
`;

const Root = styled(NavLink)`
  display: block;
  min-height: 35px;
  padding: 6px 8px;
  color: ${variables.colors.gray70};
  text-decoration: none;
  margin-bottom: 0.615384615rem /* $space-1 */;
  border: 1px solid transparent;
  border-radius: 6px /* $border-radius-medium */;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    background-color: #f6f7f8 /* $gray-10 */;

    ${Span} {
      color: #484c4f /* $gray-70 */;
    }
  }

  &:active {
    background: #484c4f /* $gray-70 */;

    ${Span} {
      color: #fff /* $white */;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${variables.colors.softKataBlue};
  }

  &.is-active {
    ${Span} {
      color: #006fe6 /* $kata-blue */;
    }

    &:hover {
      background: none;

      ${Span} {
        color: #006fe6 /* $kata-blue */;
      }
    }
  }
`;

const SubMenuIcon = styled('i')`
  margin-right: 1.230769231rem /* $space-2 */;
  font-size: 20px;
  line-height: 1em;
  vertical-align: middle;
`;
