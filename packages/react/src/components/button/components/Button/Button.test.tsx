import * as React from 'react';
import { render } from '@testing-library/react';
import { IconDocAdd } from '@aksara-ui/icons';

import { Button } from './index';

describe('components/Button', () => {
  describe('<Button />', () => {
    test('renders correctly', () => {
      const { container } = render(<Button>example</Button>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(<Button variant="primary">test button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders block buttons correctly', () => {
      const { container } = render(<Button block>test button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders icons correctly with ReactNode', () => {
      const { container } = render(
        <Button size="lg" icon={IconDocAdd} iconPosition="right">
          test button
        </Button>
      );
      const icon = container.querySelector('svg');

      expect(icon).toBeInTheDocument();
    });

    test('renders selected styles correctly', () => {
      const { container } = render(
        <Button variant="outline" selected>
          test button
        </Button>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
