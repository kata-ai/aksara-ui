import * as React from 'react';
import { render } from '@testing-library/react';
import ColorSwatchGrid from './ColorSwatchGrid';

describe('utils/storybook', () => {
  describe('ColorSwatchGrid', () => {
    test('renders correctly', () => {
      const { container } = render(<ColorSwatchGrid>test</ColorSwatchGrid>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
