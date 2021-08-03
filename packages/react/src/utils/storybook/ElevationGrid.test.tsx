import * as React from 'react';
import { render } from '@testing-library/react';
import ElevationGrid from './ElevationGrid';

describe('utils/storybook', () => {
  describe('ElevationGrid', () => {
    test('renders correctly', () => {
      const { container } = render(<ElevationGrid>test</ElevationGrid>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
