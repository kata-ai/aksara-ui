import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

export interface DropdownTriggererProps {
  children?: React.ReactNode;
}

const DropdownMenuTriggerer: React.ForwardRefRenderFunction<HTMLButtonElement, DropdownTriggererProps> = (
  { children },
  ref
) => {
  return <RadixDropdownMenu.Trigger ref={ref}>{children}</RadixDropdownMenu.Trigger>;
};

export default React.forwardRef(DropdownMenuTriggerer);
