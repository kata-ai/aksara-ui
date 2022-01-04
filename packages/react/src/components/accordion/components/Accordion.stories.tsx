import * as React from 'react';
import { IconChevronRight } from '@aksara-ui/icons';
import styled, { keyframes } from 'styled-components';
import { UnstyledButton } from '../../button';
import { Box } from '../../../layout';
import { Heading } from '../../../typography';
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from '.';

export default {
  title: 'Core/Components/Accordion',
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
const slideDown = keyframes`
  from  { height: 0 }
  to { height: var(--radix-accordion-content-height) },`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height) }
  to { height: 0 }`;

const BoxContent = styled(Box)`
  overflow: hidden;
  &[data-state='open'] {
    animation-name: ${slideDown};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state='closed'] {
    animation-name: ${slideUp};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const Example = () => {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <Box width={300} backgroundColor={'greylight01'}>
        <AccordionItem value="item-1">
          <Box py="sm" px="xs">
            <AccordionHeader>
              <Heading as="h3" display={'flex'} scale={300}>
                <AccordionTrigger>
                  <UnstyledButton
                    height={40}
                    display={'flex'}
                    flex={1}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    Title
                    <IconChevronRight size={16} />
                  </UnstyledButton>
                </AccordionTrigger>
              </Heading>
            </AccordionHeader>
            <AccordionContent>
              <BoxContent>
                <Box py="sm" px="xs">
                  This is content
                </Box>
              </BoxContent>
            </AccordionContent>
          </Box>
        </AccordionItem>
        <AccordionItem value="item-2">
          <Box borderRadius={'lg'} py="sm" px="xs">
            <AccordionHeader>
              <Heading as="h3" display={'flex'} scale={300}>
                <AccordionTrigger>
                  <UnstyledButton
                    height={40}
                    display={'flex'}
                    flex={1}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    Title
                    <IconChevronRight size={16} />
                  </UnstyledButton>
                </AccordionTrigger>
              </Heading>
            </AccordionHeader>
            <AccordionContent>
              <BoxContent>
                <Box py="sm" px="xs">
                  This is content
                </Box>
              </BoxContent>
            </AccordionContent>
          </Box>
        </AccordionItem>
      </Box>
    </Accordion>
  );
};
