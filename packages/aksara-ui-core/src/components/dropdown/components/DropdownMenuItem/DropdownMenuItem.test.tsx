import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownMenuItem } from '.';

describe('components/Dropdown', () => {
  describe('<DropdownMenuItem />', () => {
    test('renders correctly', () => {
      const { container } = render(<DropdownMenuItem>Menu Item One</DropdownMenuItem>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
