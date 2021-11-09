import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownMenuDivider } from '.';

describe('components/Dropdown', () => {
  describe('<DropdownMenuDivider />', () => {
    test('renders correctly', () => {
      const { container } = render(<DropdownMenuDivider />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
