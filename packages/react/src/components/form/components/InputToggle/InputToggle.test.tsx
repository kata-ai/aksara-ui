import * as React from 'react';
import { render } from '@testing-library/react';
import { InputToggle } from '.';

describe('components/Form', () => {
  describe('InputToggle', () => {
    test('renders correctly', () => {
      const { container } = render(<InputToggle id="toggleDummy" name="toggleDummy" label="Check here" />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
