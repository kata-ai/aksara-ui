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
    type: {
      options: ['single', 'multiple'],
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

export const SingleAccordion: Story<{ size: 'md' | 'lg' }> = ({ size }) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      style={{
        width: 300,
        backgroundColor: 'greylight01',
        p: 'md',
      }}
    >
      <AccordionItem value="item-1">
        <AccordionHeader size={size}>Title</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            This is content
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader size={size}>This is Long Title , Very veeeery veeeeeeeery long title</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            This is content is also very long, very very very long very very very long very very very long very very
            very long
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader size={size}>Nested Accordion</AccordionHeader>
        <AccordionContent>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            style={{
              width: '100%',
              backgroundColor: 'greylight01',
              p: 'md',
            }}
          >
            <AccordionItem value="item-1">
              <AccordionHeader size={size}>Title</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  This is content
                </Box>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader size={size}>This is Long Title , Very veeeery veeeeeeeery long title</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  This is content is also very long, very very very long
                </Box>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
SingleAccordion.args = {
  size: 'md',
};

export const MultipleAccordion: Story<{ size: 'md' | 'lg' }> = ({ size }) => {
  return (
    <Accordion
      type="multiple"
      defaultValue={['item-1']}
      style={{
        width: 300,
        backgroundColor: 'greylight01',
        p: 'md',
      }}
    >
      <AccordionItem value="item-1">
        <AccordionHeader size={size}>Title</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            This is content
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader size={size}>This is Long Title , Very veeeery veeeeeeeery long title</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            This is content is also very long, very very very long very very very long very very very long very very
            very long
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader size={size}>Nested Accordion</AccordionHeader>
        <AccordionContent>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            style={{
              width: '100%',
              backgroundColor: 'greylight01',
              p: 'md',
            }}
          >
            <AccordionItem value="item-1">
              <AccordionHeader size={size}>Title</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  This is content
                </Box>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader size={size}>This is Long Title , Very veeeery veeeeeeeery long title</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  This is content is also very long, very very very long
                </Box>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
MultipleAccordion.args = {
  size: 'md',
};
