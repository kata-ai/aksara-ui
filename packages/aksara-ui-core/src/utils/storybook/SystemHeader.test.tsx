import * as React from 'react';
import { render } from '@testing-library/react';
import SystemHeader from './SystemHeader';

describe('utils/storybook', () => {
  describe('SystemHeader', () => {
    test('renders correctly', () => {
      const { container } = render(<SystemHeader title="Component Title" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('has a title', () => {
      const { getByText } = render(<SystemHeader title="Component Title" />);

      expect(getByText('Component Title')).toBeInTheDocument();
    });
  });
});
