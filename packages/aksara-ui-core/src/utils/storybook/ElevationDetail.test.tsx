import * as React from 'react';
import { render } from '@testing-library/react';
import ElevationDetail from './ElevationDetail';

describe('utils/storybook', () => {
  describe('ElevationDetail', () => {
    test('renders correctly', () => {
      const { container } = render(<ElevationDetail title="Level 1" description="Flat" />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
