import * as React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

export interface SidebarSubProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {
  titleElement?: React.ReactNode;
  hasTop?: boolean;
  collapsed?: boolean;
}

const SidebarSub: React.SFC<SidebarSubProps> = ({
  className,
  style,
  titleElement,
  children,
  ...rest
}) => (
  <div className={className} style={style} {...rest}>
    {titleElement && <SubHeader>{titleElement}</SubHeader>}
    <SubContent>{children}</SubContent>
  </div>
);

export default styled(SidebarSub)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: ${variables.spaces.space8};
  padding: ${variables.spaces.space3} ${variables.spaces.space2};
  background: ${variables.colors.white};
  border-right: 1px solid ${variables.colors.gray30};
`;

const SubHeader = styled('div')`
  padding: 0;
`;

const SubContent = styled('div')`
  padding: 0;
`;
