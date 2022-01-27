import * as React from 'react';
import { render } from '@testing-library/react';
import Tag from './Tag';

describe('components/Tag', () => {
  describe('Tag', () => {
    test('renders correctly', () => {
      const { container } = render(<Tag>test Tag</Tag>);

      expect(container).toHaveTextContent('test Tag');
    });
  });
});
