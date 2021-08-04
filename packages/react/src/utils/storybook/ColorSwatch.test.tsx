import * as React from 'react';
import { render } from '@testing-library/react';
import ColorSwatch from './ColorSwatch';
import { theme } from '../../theme';

describe('utils/storybook', () => {
  describe('ColorSwatch', () => {
    test('renders correctly', () => {
      const { container } = render(<ColorSwatch title="blue06" colorKey="blue06" hex={theme.colors.blue06} />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
