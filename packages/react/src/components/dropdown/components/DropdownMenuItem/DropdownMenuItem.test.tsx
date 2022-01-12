import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownMenuContent, DropdownMenuDivider, DropdownMenuItem, DropdownMenuTrigger } from '.';
import { DropdownMenu } from '../DropdownMenu';
import { Box } from '../../../../layout';

describe('components/Dropdown', () => {
  describe('<DropdownMenuItem />', () => {
    test('renders correctly', () => {
      const { container } = render(
        <DropdownMenu width={200}>
          <DropdownMenuTrigger>
            <Box>Hello</Box>
          </DropdownMenuTrigger>
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
    });
  });
});
