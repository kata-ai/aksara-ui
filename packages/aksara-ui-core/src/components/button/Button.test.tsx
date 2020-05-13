import * as React from 'react';
import { render } from '@testing-library/react';
import { IconDocAdd } from '@aksara-ui/icons';

import { Button, FloatingButton } from './index';

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

    test('renders icons correctly', () => {
      const { container } = render(<Button icon="add">test button</Button>);
      const icon = container.querySelector('i');

      expect(icon).toBeInTheDocument();
    });

    test('renders icons correctly with ReactNode', () => {
      const { container } = render(
        <Button size={32} icon={IconDocAdd} iconPosition="right">
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

      expect(container.firstChild).toHaveClass('selected');
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
