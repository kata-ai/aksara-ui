import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLinkProps, NavLink } from 'react-router-dom';

import { variables } from '@kata-kit/theme';

import renderIcon from '../utils/renderIcon';

export interface SidebarSubMenuProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  style?: React.CSSProperties;
  asNavLink?: boolean;
  to?: NavLinkProps['to'];
  exact?: NavLinkProps['exact'];
  icon?: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface IconType {
  iconType: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SidebarSubMenu: React.SFC<SidebarSubMenuProps> = ({
  className,
  style,
  icon,
  asNavLink,
  to,
  exact,
  children,
  ...rest
}) => {
  if (asNavLink && to) {
    return (
      <StyledNavLink
        className={className}
        style={style}
        to={to}
        exact={exact}
        activeClassName="is-active"
        {...rest}
      >
        {icon ? (
          <Span>
            <SubMenuIcon iconType={typeof icon}>{renderIcon(icon)}</SubMenuIcon>
            {children}
          </Span>
        ) : (
          <Span>{children}</Span>
        )}
      </StyledNavLink>
    );
  }

  return (
    <StyledAnchor className={className} style={style} {...rest}>
      {icon ? (
        <Span>
          <SubMenuIcon iconType={typeof icon}>{renderIcon(icon)}</SubMenuIcon>{' '}
          {children}
        </Span>
      ) : (
        <Span>{children}</Span>
      )}
    </StyledAnchor>
  );
};

const SubMenuIcon = styled('span')<IconType>`
  ${props => (props.iconType === 'string' ? 'font-size: 20px' : undefined)};
  margin-right: 1.230769231rem /* $space-2 */;
  line-height: 1em;
  vertical-align: middle;

  svg {
    width: 18px;
    height: 18px;
    margin-left: 2px;

    path {
      fill: ${variables.colors.gray70};
    }
  }
`;

const Span = styled('span')`
  font-size: 1rem;
  color: ${variables.colors.gray70};
`;

const BaseStyles = css`
  display: block;
  min-height: 35px;
  padding: 6px 8px;
  color: ${variables.colors.gray70};
  text-decoration: none;
  margin-bottom: ${variables.spaces.space1};
  border: 1px solid transparent;
  border-radius: 6px /* $border-radius-medium */;
  transition: box-shadow 0.3s ease;

  &:hover {
    text-decoration: none;
    background-color: ${variables.colors.gray10};

    ${Span} {
      color: ${variables.colors.gray70};
    }
  }

  &:active {
    background-color: ${variables.colors.gray70};
    color: ${variables.colors.white};

    ${Span} {
      color: ${variables.colors.white};
    }

    svg {
      path {
        fill: ${variables.colors.white};
      }
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

    svg {
      path {
        fill: ${variables.colors.kataBlue};
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  ${BaseStyles}
`;

const StyledAnchor = styled('a')`
  ${BaseStyles}
`;

export default SidebarSubMenu;
