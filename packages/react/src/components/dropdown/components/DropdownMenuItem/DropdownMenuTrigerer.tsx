import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export interface DropdownTriggererProps {
  children?: React.ReactNode;
}

const Trigger = styled(RadixDropdownMenu.Trigger)`
  &:focus-visible {
    outline: 0px;
  }
`;

const DropdownMenuTriggerer: React.ForwardRefRenderFunction<HTMLButtonElement, DropdownTriggererProps> = (
  { children },
  ref
) => {
  return (
    <Trigger asChild ref={ref}>
      {children}
    </Trigger>
  );
};

export default React.forwardRef(DropdownMenuTriggerer);
