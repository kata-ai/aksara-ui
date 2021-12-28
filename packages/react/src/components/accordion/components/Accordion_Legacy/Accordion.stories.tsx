import * as React from 'react';

import { Paragraph } from '../../../../typography';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '.';

export default {
  title: 'Core/Components/Accordion_Legacy',
  component: [Accordion, AccordionItem],
};

export const BasicExample = () => {
  return (
    <Accordion collapsible>
      <AccordionItem>
        <AccordionButton>Step 1: Do a thing</AccordionButton>
        <AccordionPanel>
          <Paragraph>
            Integer ad iaculis semper aenean nibh quisque hac eget volutpat, at dui sem accumsan cras congue mi varius
            egestas interdum, molestie blandit sociosqu sodales diam metus erat venenatis.
          </Paragraph>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>Step 2: Do another thing</AccordionButton>
        </h3>
        <AccordionPanel>
          <Paragraph>
            Hendrerit faucibus litora justo aliquet inceptos gravida felis vel aenean, natoque fermentum nostra tempus
            ornare nam diam est, neque risus aliquam sapien vestibulum sociis integer eros.
          </Paragraph>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
