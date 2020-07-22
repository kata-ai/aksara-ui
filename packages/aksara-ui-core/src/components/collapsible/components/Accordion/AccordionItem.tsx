import { AccordionItem as ReachAccordionItem } from '@reach/accordion';
import styled from 'styled-components';
import { colors } from '../../../../utils';

const AccordionItem = styled(ReachAccordionItem)`
  display: block;
  border-top: 1px solid ${colors.grey04};
`;

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
