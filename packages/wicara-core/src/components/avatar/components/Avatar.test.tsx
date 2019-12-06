import * as React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('components/Avatar', () => {
  describe('<Avatar />', () => {
    test('renders on large size by default', () => {
      const { container } = render(<Avatar src="" />);

      expect(container.firstChild).toHaveStyleRule('width', '40px');
      expect(container.firstChild).toHaveStyleRule('height', '40px');
    });

    test('renders in correct sizes', () => {
      const { container } = render(<Avatar size={24} src="" />);

      expect(container.firstChild).toHaveStyleRule('width', '24px');
      expect(container.firstChild).toHaveStyleRule('height', '24px');
    });
  });
});
