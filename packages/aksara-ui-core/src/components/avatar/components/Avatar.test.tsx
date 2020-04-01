import * as React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('components/Avatar', () => {
  describe('<Avatar />', () => {
    test('renders on large size by default', () => {
      const { container } = render(<Avatar src="" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders in correct sizes', () => {
      const { container } = render(<Avatar size={24} src="" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders initials correctly', () => {
      const { getByText } = render(<Avatar name="Adry Muhammad" />);

      expect(getByText('AM')).toBeInTheDocument();
    });
  });
});
