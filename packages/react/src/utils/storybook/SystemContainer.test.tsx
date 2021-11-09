import * as React from 'react';
import { render } from '@testing-library/react';
import SystemContainer from './SystemContainer';

describe('utils/storybook', () => {
  describe('SystemContainer', () => {
    test('renders correctly', () => {
      const { container } = render(<SystemContainer>h</SystemContainer>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
