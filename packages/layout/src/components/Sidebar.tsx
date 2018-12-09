import * as React from 'react';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

import { variables } from '@kata-kit/theme';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  collapsed?: boolean;
  hasTop?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({
  className,
  style,
  collapsed,
  hasTop,
  children,
  ...rest
}) => {
  return (
    <div className={className} style={style} {...rest}>
      <Inner collapsed={collapsed} hasTop={hasTop}>
        <Scrollbars>
          {React.Children.map(children, (Item: React.ReactElement<any>) => {
            return Item &&
              Item.type &&
              ['SidebarMain', 'SidebarSub'].some(
                type => type === (Item.type as React.SFC).displayName
              )
              ? React.cloneElement(Item, {
                  hasTop,
                  collapsed
                })
              : Item;
          })}
        </Scrollbars>
      </Inner>
    </div>
  );
};

export default styled(Sidebar)`
  display: flex;
  position: relative;
  flex: 0 0 ${props => (props.collapsed ? variables.spaces.space8 : '280px')};
  background: #ffffff;
`;

const Inner = styled('div')`
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => (props.collapsed ? variables.spaces.space8 : '280px')};
  z-index: 100;

  ${props => (props.hasTop ? 'top: 64px;' : '')}
`;
