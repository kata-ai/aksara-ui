import * as React from 'react';
import { render } from '@testing-library/react';
import { IconDocAdd } from '@aksara-ui/icons';

import { ButtonAnchor } from './index';

describe('components/Button', () => {
  describe('<ButtonAnchor />', () => {
    test('renders correctly', () => {
      const { container } = render(<ButtonAnchor>example</ButtonAnchor>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(<ButtonAnchor variant="primary">test button</ButtonAnchor>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders block buttons correctly', () => {
      const { container } = render(<ButtonAnchor block>test button</ButtonAnchor>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders icons correctly', () => {
      const { container } = render(<ButtonAnchor icon="add">test button</ButtonAnchor>);
      const icon = container.querySelector('i');

      expect(icon).toBeInTheDocument();
    });

    test('renders icons correctly with ReactNode', () => {
      const { container } = render(
        <ButtonAnchor size={32} icon={IconDocAdd} iconPosition="right">
          test button
        </ButtonAnchor>
      );
      const icon = container.querySelector('svg');

      expect(icon).toBeInTheDocument();
    });

    test('renders selected styles correctly', () => {
      const { container } = render(
        <ButtonAnchor variant="outline" selected>
          test button
        </ButtonAnchor>
      );

      expect(container.firstChild).toHaveClass('selected');
    });
  });
});
