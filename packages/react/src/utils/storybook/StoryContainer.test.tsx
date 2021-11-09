import * as React from 'react';
import { render } from '@testing-library/react';
import StoryContainer from './StoryContainer';

describe('utils/storybook', () => {
  describe('StorybookContainer', () => {
    test('renders correctly', () => {
      const { container } = render(<StoryContainer>example</StoryContainer>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
