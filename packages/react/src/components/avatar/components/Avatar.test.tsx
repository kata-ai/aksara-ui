import * as React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('components/Avatar', () => {
  describe('<Avatar />', () => {
    test('renders image correctly', () => {
      const { getByRole } = render(<Avatar name="Adry Muhammad" src="https://picsum.photos/id/2/400/400" />);

      const image = getByRole('img', {
        name: /adry muhammad/i,
      });
      expect(image).toBeVisible();
    });

    test('renders initials correctly', () => {
      const { getByText, getByRole } = render(<Avatar name="Adry Muhammad" />);

      expect(getByText(/adry muhammad/i)).toBeInTheDocument();
      expect(getByRole('presentation')).toBeVisible();
    });
  });
});
