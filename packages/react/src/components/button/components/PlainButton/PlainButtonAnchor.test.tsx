import { IconDocAdd } from '@aksara-ui/icons';
import { render } from '@testing-library/react';
import * as React from 'react';
import { PlainButtonAnchor } from './index';

describe('components/Button', () => {
  describe('<PlainButtonAnchor />', () => {
    test('renders correctly', () => {
      const { container } = render(<PlainButtonAnchor>example</PlainButtonAnchor>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(<PlainButtonAnchor variant="primary">test button</PlainButtonAnchor>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders icons correctly', () => {
      const { container } = render(
        <PlainButtonAnchor size="md" icon={IconDocAdd} iconPosition="right">
          test button
        </PlainButtonAnchor>
      );
      const icon = container.querySelector('svg');

      expect(icon).toBeInTheDocument();
    });

    test('renders selected styles correctly', () => {
      const { container } = render(<PlainButtonAnchor selected>test button</PlainButtonAnchor>);

      expect(container.firstChild).toHaveClass('selected');
    });
  });
});
