import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from './index';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { colors } from '../../utils';

describe('components/Button', () => {
  describe('<Button />', () => {
    test('renders correctly', () => {
      const { container } = render(<Button>example</Button>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(<Button variant="primary">test button</Button>);

      expect(container.firstChild).toHaveStyleRule('background-color', colors.cobalt);
      expect(container.firstChild).toHaveStyleRule('color', colors.white);
    });
  });
});
