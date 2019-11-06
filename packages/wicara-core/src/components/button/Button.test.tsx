import * as React from 'react';
import { render } from '@testing-library/react';
import { Button, FloatingButton } from './index';

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

    test('renders block buttons correctly', () => {
      const { container } = render(<Button block>test button</Button>);

      expect(container.firstChild).toHaveStyleRule('display', 'block');
      expect(container.firstChild).toHaveStyleRule('width', '100%');
    });

    test('renders icons correctly', () => {
      const { container } = render(<Button icon="add">test button</Button>);
      const icon = container.querySelector('i');

      expect(icon).toBeInTheDocument();
    });
  });

  describe('<FloatingButton />', () => {
    test('renders correctly', () => {
      const { container } = render(
        <FloatingButton>
          <i className="icon-trash" />
        </FloatingButton>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
