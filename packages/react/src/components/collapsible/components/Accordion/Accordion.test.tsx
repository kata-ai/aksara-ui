import * as React from 'react';
import { render } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '.';

describe('components/Collapsible', () => {
  describe('<Accordion />', () => {
    test('renders correctly', () => {
      const { container, getByText } = render(
        <Accordion collapsible>
          <AccordionItem>
            <AccordionButton>Step 1</AccordionButton>
            <AccordionPanel>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      );

      const titleText = getByText('Step 1');
      expect(container.firstChild).toBeInTheDocument();
      expect(titleText).toBeInTheDocument();
    });
  });
});
