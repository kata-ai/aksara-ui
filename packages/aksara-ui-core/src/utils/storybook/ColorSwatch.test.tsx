import * as React from 'react';
import { render } from '@testing-library/react';
import ColorSwatch from './ColorSwatch';
import { theme } from '../../theme';

describe('utils/storybook', () => {
  describe('ColorSwatch', () => {
    test('renders correctly', () => {
      const { container } = render(
        <ColorSwatch title="Dark Kata Blue" colorKey="darkKataBlue" hex={theme.colors.darkKataBlue} />
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
