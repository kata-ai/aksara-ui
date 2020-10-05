import styled from 'styled-components';
import { Card } from '../../../../foundations';

export const Arrow = styled('div')`
  display: block;
  line-height: 11px;
  z-index: 1;
  text-align: center;
  position: absolute;
  top: -1px;
`;

export const MenuCard = styled(Card)`
  display: inline-block;
  text-align: left;
  max-width: 100vw;
  margin-top: 11px;
`;
