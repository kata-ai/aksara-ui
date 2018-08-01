import styled from 'styled-components';

export interface DashboardContentHeaderProps {
  isSecondary?: boolean;
}

const DashboardContentHeader = styled<DashboardContentHeaderProps, 'h1'>('h1')`
  margin-top: ${props => (props.isSecondary ? '2.461538462rem' : 0)};
  margin-bottom: 24px;
  color: ${props => (props.isSecondary ? '#24282d' : '#ffffff')};
  font-size: 1.85rem;
  font-weight: 500;
`;

export default DashboardContentHeader;
