import * as React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import styled, { keyframes } from 'styled-components';
import { IconChevronRight } from '@aksara-ui/icons';
import { Box } from '../../../layout';
import { CSSObject, useComponentStyles } from '../../../system';
import { UnstyledButton } from '../../button';
import { Text, UnstyledAnchorProps } from '../../../typography';

const AccordionChevron = styled(IconChevronRight)`
  transition: transform 300ms;
  [data-state='open'] & {
    transform: rotate(90deg);
  }
`;

export const DisclosureNavItem: React.FC<Collapsible.CollapsibleProps & { sx?: CSSObject }> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <Collapsible.Root asChild {...rest}>
      <Box sx={{ ...sx }} maxWidth="272px">
        {children}
      </Box>
    </Collapsible.Root>
  );
};
export interface DisclosureNavItemProps extends UnstyledAnchorProps, React.ComponentPropsWithoutRef<'a'> {
  icon: React.ComponentType<any>;
  title: string;
  disabled?: boolean;
  isActive?: boolean;
  labelText?: string;
}

export const DisclosureNavTrigger: React.FC<DisclosureNavItemProps> = ({ icon, title, disabled, isActive }) => {
  const secondaryNavItemStyles = useComponentStyles('secondaryNavItem', {
    disabled,
    isActive,
  });
  return (
    <Collapsible.Trigger asChild>
      <UnstyledButton sx={secondaryNavItemStyles}>
        {React.createElement(icon, { fill: 'currentColor', 'aria-hidden': true, size: 20 })}
        <Text scale={300} display="block" flex="1 1 auto" ml="xs">
          {title}
        </Text>
        <Box fontSize={16} width={16} height={16} ml="md">
          <AccordionChevron fill="currentColor" aria-hidden size={16} />
        </Box>
      </UnstyledButton>
    </Collapsible.Trigger>
  );
};

const slideDown = keyframes`
  from  { height: 0 }
  to { height: var(--radix-collapsible-content-height) }`;

const slideUp = keyframes`
  from { height: var(--radix-collapsible-content-height) }
  to { height: 0 }`;

const BoxContent = styled(Box)`
  overflow: hidden;
  max-width: 272px;
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
export const DisclosureNavContent: React.FC<Collapsible.CollapsibleContentProps> = ({ children, ...rest }) => {
  return (
    <Collapsible.Content asChild {...rest}>
      <BoxContent>{children}</BoxContent>
    </Collapsible.Content>
  );
};
