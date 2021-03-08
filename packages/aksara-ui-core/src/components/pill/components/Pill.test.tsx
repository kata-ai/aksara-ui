import * as React from 'react';
import { render } from '@testing-library/react';
import Pill from './Pill';

describe('components/Pill', () => {
  describe('Pill', () => {
    test('renders correctly', () => {
      const { container } = render(<Pill>test pill</Pill>);

      expect(container).toHaveTextContent('test pill');
    });

    test('renders with additional variants', () => {
      const { container } = render(<Pill variant="red">test pill</Pill>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
