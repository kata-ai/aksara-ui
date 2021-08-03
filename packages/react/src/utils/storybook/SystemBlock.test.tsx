import * as React from 'react';
import { render } from '@testing-library/react';
import SystemBlock from './SystemBlock';

describe('utils/storybook', () => {
  describe('SystemHeader', () => {
    test('renders correctly', () => {
      const { container } = render(<SystemBlock title="Component Title" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('has a title', () => {
      const { getByText } = render(<SystemBlock title="Component Title" />);

      expect(getByText('Component Title')).toBeInTheDocument();
    });
  });
});
