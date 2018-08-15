import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

import Card from './Card';

const DashboardCard = styled(Card)`
  height: 100%;
  min-height: 200px;

  @media (min-width: ${variables.breaks.breakSmall}) {
    max-height: 200px;
  }
`;

export default DashboardCard;
