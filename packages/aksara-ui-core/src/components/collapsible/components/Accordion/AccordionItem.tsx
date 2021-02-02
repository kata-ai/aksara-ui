import { AccordionItem as ReachAccordionItem } from '@reach/accordion';
import styled from 'styled-components';
import { theme } from '../../../../theme';

const AccordionItem = styled(ReachAccordionItem)`
  display: block;
  border-top: 1px solid ${theme.colors.grey04};
`;

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
