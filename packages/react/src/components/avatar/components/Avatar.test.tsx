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

    test('render presence correctly', () => {
      const { getByTestId } = render(<Avatar name="Adry Muhammad" presence={{ label: '3', position: 'top' }} />);
      const presence = getByTestId('avatar-presence');
      expect(presence).toBeInTheDocument();
    });

    test('not render presence', () => {
      const { queryByTestId } = render(<Avatar name="Adry Muhammad" />);
      const presence = queryByTestId('avatar-presence');
      expect(presence).not.toBeInTheDocument();
    });
  });
  describe('Bg Color Generator', () => {
    test('generate bgColor Correctly', () => {
      const { getAllByTestId } = render(
        <>
          <Avatar name="Adry Muhammad" />
          <Avatar name="Rara Pertama Sari" />
          <Avatar name="Ardi Marimo" />
        </>
      );

      const listContainer = getAllByTestId('avatar-container');
      expect(!!(listContainer[0].className === listContainer[2].className)).toBe(true);
      expect(!!(listContainer[0].className === listContainer[1].className)).toBe(false);
    });
  });
});
