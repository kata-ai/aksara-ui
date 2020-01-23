import * as React from 'react';
import { render } from '@testing-library/react';

import { colors } from '../../utils';
import { Button, FloatingButton, IconButton, OutlineButton } from './index';

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

    test('renders icons correctly with ReactNode', () => {
      const { container } = render(
        <Button size="sm" icon={<i className="icon-add" />} iconPosition="right">
          test button
        </Button>
      );
      const icon = container.querySelector('i');

      expect(icon).toBeInTheDocument();
    });
  });

  describe('<OutlineButton />', () => {
    test('renders correctly', () => {
      const { container } = render(<OutlineButton>example</OutlineButton>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders block buttons correctly', () => {
      const { container } = render(<OutlineButton block>test button</OutlineButton>);

      expect(container.firstChild).toHaveStyleRule('display', 'block');
      expect(container.firstChild).toHaveStyleRule('width', '100%');
    });

    test('renders icons correctly', () => {
      const { container } = render(<OutlineButton icon="add">test button</OutlineButton>);
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

  describe('<IconButton />', () => {
    test('renders correctly', () => {
      const { container } = render(
        <IconButton>
          <i className="icon-trash" />
        </IconButton>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders in different sizes', () => {
      const { container } = render(
        <>
          <IconButton size="sm">
            <i className="icon-trash" />
          </IconButton>
          <IconButton size="md">
            <i className="icon-trash" />
          </IconButton>
        </>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(
        <IconButton variant="primary">
          <i className="icon-add" />
        </IconButton>
      );

      expect(container.firstChild).toHaveStyleRule('background-color', colors.cobalt);
      expect(container.firstChild).toHaveStyleRule('color', colors.white);
    });
  });
});
