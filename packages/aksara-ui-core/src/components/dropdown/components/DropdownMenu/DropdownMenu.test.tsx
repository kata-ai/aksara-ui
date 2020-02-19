import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownMenu } from '.';
import { DropdownMenuItem } from '../DropdownMenuItem';

describe('components/Dropdown', () => {
  describe('<DropdownMenu />', () => {
    test('renders correctly', () => {
      const { container, getByText } = render(
        <DropdownMenu width={200}>
          <DropdownMenuItem>Menu Item One</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
        </DropdownMenu>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(getByText('Menu Item One')).toBeInTheDocument();
    });

    test('renders tip arrows correctly', () => {
      const { container } = render(
        <DropdownMenu tipOffset={24} width={200}>
          <DropdownMenuItem>Menu Item One</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
        </DropdownMenu>
      );

      const arrow = container.querySelector('svg');
      expect(arrow).toBeInTheDocument();
    });
  });
});
