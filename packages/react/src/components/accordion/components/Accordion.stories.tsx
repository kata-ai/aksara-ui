import * as React from 'react';
import { IconChevronUp } from '@aksara-ui/icons';
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

const AccordionChevron = styled(IconChevronUp)`
  transition: transform 300ms;
  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

export const Example = () => {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <Box width={300} backgroundColor={'greylight01'}>
        <AccordionItem value="item-1">
          <Box>
            <AccordionHeader>
              <Heading as="h3" display={'flex'} scale={300}>
                <AccordionTrigger>
                  <UnstyledButton
                    py="sm"
                    px="xs"
                    height={40}
                    display={'flex'}
                    flex={1}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    _hover={{ backgroundColor: 'greylight03' }}
                    _focus={{
                      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
                    }}
                    _focusVisible={{
                      outline: 'none',
                    }}
                  >
                    Title
                    <AccordionChevron size={16} />
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
          <Box>
            <AccordionHeader>
              <Heading as="h3" display={'flex'} scale={300}>
                <AccordionTrigger>
                  <UnstyledButton
                    py="sm"
                    px="xs"
                    height={40}
                    display={'flex'}
                    flex={1}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    _hover={{ backgroundColor: 'greylight03' }}
                    _focus={{
                      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
                    }}
                    _focusVisible={{
                      outline: 'none',
                    }}
                  >
                    Title
                    <AccordionChevron size={16} />
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
