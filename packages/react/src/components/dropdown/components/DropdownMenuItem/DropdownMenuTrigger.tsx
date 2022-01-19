import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

const Trigger = styled(RadixDropdownMenu.Trigger)`
  &:focus-visible {
    outline: 0px;
    box-shadow: 0 0 0 2px rgba(175, 214, 255, 0.7);
  }
`;

const DropdownMenuTrigger: React.FC = ({ children }) => {
  return <Trigger asChild>{children}</Trigger>;
};

export default DropdownMenuTrigger;
