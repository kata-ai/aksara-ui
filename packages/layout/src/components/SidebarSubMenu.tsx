import * as React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

export interface SidebarSubMenuProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  <a className={className} {...rest}>
    {icon ? (
      <Span>
        <SubMenuIcon className={`icon-${icon}`} /> {children}
      </Span>
    ) : (
      <Span>{children}</Span>
    )}
  </a>
);

const SubMenuIcon = styled('i')`
  margin-right: 1.230769231rem /* $space-2 */;
  font-size: 20px;
  line-height: 1em;
  vertical-align: middle;
`;

const Span = styled('span')`
  font-size: 1rem;
  color: ${variables.colors.gray70};
`;

export default styled(SidebarSubMenu)`
  display: block;
  min-height: 35px;
  padding: 6px 8px;
  color: ${variables.colors.gray70};
  text-decoration: none;
  margin-bottom: ${variables.spaces.space1};
  border: 1px solid transparent;
  border-radius: 6px /* $border-radius-medium */;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    background-color: ${variables.colors.gray10};

    ${Span} {
      color: ${variables.colors.gray70};
    }
  }

  &:active {
    color: ${variables.colors.gray70};

    ${Span} {
      color: ${variables.colors.white};
    }
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${variables.colors.softKataBlue};
  }

  &.is-active {
    ${Span} {
      color: ${variables.colors.kataBlue};
    }

    &:hover {
      background: none;

      ${Span} {
        color: ${variables.colors.kataBlue};
      }
    }
  }
`;
