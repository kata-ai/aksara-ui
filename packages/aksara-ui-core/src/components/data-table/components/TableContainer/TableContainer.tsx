import styled from 'styled-components';
import { BaseStyles, BaseStylesProps } from '../../styles';

export type TableContainerProps = BaseStylesProps;

const TableContainer = styled('div')`
  overflow-x: auto;

  ${BaseStyles}
`;

TableContainer.displayName = 'TableContainer';

export default TableContainer;
