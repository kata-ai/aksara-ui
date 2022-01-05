import { Story } from '@storybook/react';
import * as React from 'react';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '.';
import { Box } from '../../../layout';

export default {
  title: 'Core/Components/Accordion',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#b6b2b2',
        },
      ],
    },
  },
};

export const Example: Story<{ size: 'md' | 'lg' }> = ({ size }) => {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <Box width={300} backgroundColor={'greylight01'} p="md">
        <AccordionItem value="item-1">
          <Box>
            <AccordionHeader size={size}>Title</AccordionHeader>
            <AccordionContent>
              <Box py="sm" px="xs">
                This is content
              </Box>
            </AccordionContent>
          </Box>
        </AccordionItem>
        <AccordionItem value="item-2">
          <Box>
            <AccordionHeader size={size}>Title</AccordionHeader>
            <AccordionContent>
              <Box py="sm" px="xs">
                This is content
              </Box>
            </AccordionContent>
          </Box>
        </AccordionItem>
      </Box>
    </Accordion>
  );
};
Example.args = {
  size: 'md',
};
