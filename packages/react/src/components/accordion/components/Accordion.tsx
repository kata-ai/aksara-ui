import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionMultipleProps, AccordionSingleProps } from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';
import { IconChevronUp } from '@aksara-ui/icons';
import { Heading } from '../../../typography';
import { UnstyledButton } from '../../button';
import { Box } from '../../../layout';

export const Accordion: React.FC<AccordionSingleProps | AccordionMultipleProps> = ({ children, ...rest }) => {
  return (
    <AccordionPrimitive.Root asChild {...rest}>
      {children}
    </AccordionPrimitive.Root>
  );
};

export const AccordionItem: React.FC<AccordionPrimitive.AccordionItemProps> = ({ children, ...rest }) => {
  return (
    <AccordionPrimitive.Item asChild {...rest}>
      {children}
    </AccordionPrimitive.Item>
  );
};

/** AccordionTrigger child is Button */
export const AccordionTrigger: React.FC<AccordionPrimitive.AccordionTriggerProps> = ({ children, ...rest }) => {
  return (
    <AccordionPrimitive.Trigger asChild {...rest}>
      {children}
    </AccordionPrimitive.Trigger>
  );
};

const AccordionChevron = styled(IconChevronUp)`
  transition: transform 300ms;
  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

export interface AccordionHeaderProps extends AccordionPrimitive.AccordionHeaderProps {
  size?: 'md' | 'lg';
}

/** AccordionHeader child is h3 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children, size = 'md', ...rest }) => {
  return (
    <AccordionPrimitive.Header asChild {...rest}>
      <Heading as="h3" display={'flex'} scale={size === 'md' ? 200 : 300}>
        <AccordionTrigger>
          <UnstyledButton
            py={size === 'md' ? 'sm' : 'md'}
            px={'xs'}
            height={size === 'md' ? 40 : 48}
            display={'flex'}
            flex={1}
            borderRadius={'lg'}
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
            {children}
            <AccordionChevron size={16} />
          </UnstyledButton>
        </AccordionTrigger>
      </Heading>
    </AccordionPrimitive.Header>
  );
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
export const AccordionContent: React.FC<AccordionPrimitive.AccordionContentProps> = ({ children, ...rest }) => {
  return (
    <AccordionPrimitive.Content asChild {...rest}>
      <BoxContent>{children}</BoxContent>
    </AccordionPrimitive.Content>
  );
};
