import * as React from 'react';
import styled from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  AccordionButton as ReachAccordionButton,
  AccordionButtonProps as ReachAccordionButtonProps,
} from '@reach/accordion';
import { IconChevronRight } from '@aksara-ui/icons';

import { Heading } from '../../../../foundations';
import { theme } from '../../../../theme';
import { UnstyledAccordionButtonStyles, SystemStyles, SystemProps } from './styled';

const Root = styled(ReachAccordionButton).withConfig<SystemProps & ReachAccordionButtonProps>({
  shouldForwardProp: propName => shouldForwardProp(propName as string), // different props between these two packages
})`
  ${UnstyledAccordionButtonStyles}

  &:hover {
    background-color: ${theme.colors.grey03};
  }

  &:focus {
    background-color: ${theme.colors.indigo01};
    outline: 1px solid ${theme.colors.blue06};
  }

  &[aria-expanded='true'] {
    background-color: ${theme.colors.indigo01};

    svg {
      transform: rotate(90deg);
    }
  }

  ${SystemStyles}
`;

const AccordionButton: React.FC<ReachAccordionButtonProps> = ({ children, ...rest }) => {
  return (
    <Root display="flex" flexDirection="row" alignItems="center" width="100%" py="sm" px="md" {...rest}>
      <IconChevronRight size={16} />
      <Heading as="h3" ml="md" scale={200}>
        {children}
      </Heading>
    </Root>
  );
};

AccordionButton.displayName = 'AccordionButton';

export default AccordionButton;
