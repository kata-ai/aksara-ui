import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownMenu } from '.';
import { Box } from '../../../../layout';
import { DropdownMenuItem, DropdownMenuTrigerer, DropdownMenuContent, DropdownMenuDivider } from '../DropdownMenuItem';

describe('components/Dropdown', () => {
  describe('<DropdownMenu />', () => {
    test('renders correctly', () => {
      const { container, getByText } = render(
        <DropdownMenu width={200}>
          <DropdownMenuTrigerer>
            <Box>Hello</Box>
          </DropdownMenuTrigerer>
          <DropdownMenuContent side={'bottom'}>
            <DropdownMenuItem disabled>Hello again</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Hello again 2</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Hello again 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(getByText('Hello')).toBeInTheDocument();
    });

    // test('renders tip arrows correctly', () => {
    //   const { container } = render(
    //     <DropdownMenu width={200}>
    //       <DropdownMenuTrigerer>
    //         <Box>Hello</Box>
    //       </DropdownMenuTrigerer>
    //       <DropdownMenuContent offset={24} side={'bottom'}>
    //         <DropdownMenuItem disabled>Hello again</DropdownMenuItem>
    //         <DropdownMenuDivider />
    //         <DropdownMenuItem>Hello again 2</DropdownMenuItem>
    //         <DropdownMenuDivider />
    //         <DropdownMenuItem>Hello again 3</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   );

    //   const arrow = container.querySelector('svg');
    //   expect(arrow).toBeInTheDocument();
    // });
  });
});
