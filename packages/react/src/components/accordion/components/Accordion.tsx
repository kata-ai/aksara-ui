import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionMultipleProps, AccordionSingleProps } from '@radix-ui/react-accordion';

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

/** AccordionHeader child is h3 */
export const AccordionHeader: React.FC<AccordionPrimitive.AccordionHeaderProps> = ({ children, ...rest }) => {
  return (
    <AccordionPrimitive.Header asChild {...rest}>
      {children}
    </AccordionPrimitive.Header>
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

export const AccordionContent: React.FC<AccordionPrimitive.AccordionContentProps> = ({ children, ...rest }) => {
  return (
    <AccordionPrimitive.Content asChild {...rest}>
      {children}
    </AccordionPrimitive.Content>
  );
};
