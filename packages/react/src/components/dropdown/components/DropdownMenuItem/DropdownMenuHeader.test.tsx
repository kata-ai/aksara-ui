import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownMenuHeader } from '.';

describe('components/Dropdown', () => {
  describe('<DropdownMenuDivider />', () => {
    test('renders correctly', () => {
      const { container } = render(<DropdownMenuHeader>title</DropdownMenuHeader>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
