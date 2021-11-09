import * as React from 'react';
import { AccordionPanel as ReachAccordionPanel } from '@reach/accordion';

import { Box } from '../../../../layout';
import { SystemProps } from './styled';

const AccordionPanel: React.FC<SystemProps> = ({ children, ...rest }) => {
  return (
    <ReachAccordionPanel>
      <Box display="block" p="md" {...rest}>
        {children}
      </Box>
    </ReachAccordionPanel>
  );
};

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
