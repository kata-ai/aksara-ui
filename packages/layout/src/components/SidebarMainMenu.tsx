import * as React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

export interface SidebarMainMenuProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  style?: React.CSSProperties;
  icon: string;
}

const SidebarMainMenu: React.SFC<SidebarMainMenuProps> = ({
  className,
  style,
  icon,
  children,
  ...rest
}) => (
  <a className={className} style={style} {...rest}>
    <Icon>
      <i className={`icon-${icon}`} />
    </Icon>
    <Span>{children}</Span>
  </a>
);

const Icon = styled('div')`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: calc(${variables.spaces.space1} / 2);
  padding: 10px;
  font-size: 20px;
  color: #676b6d;
  border-radius: 4px /* $border-radius-small */;
`;

const Span = styled('span')`
  color: #676b6d;
`;

export default styled(SidebarMainMenu)`
  margin: 0 0 16px;
  padding: 4px 0;
  font-size: 12px;
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${variables.colors.gray60};

    & ${Icon} {
      background-color: ${variables.colors.gray70};
      color: ${variables.colors.gray50};
    }
  }

  &:focus {
    outline: 0;
  }

  &.is-active {
    ${Span} {
      color: ${variables.colors.white};
    }

    ${Icon} {
      background-color: ${variables.colors.kataBlue};
      color: ${variables.colors.white};
    }
  }
`;
