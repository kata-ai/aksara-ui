import * as React from 'react';
import { render } from '@testing-library/react';
import { IconDocAdd } from '@aksara-ui/icons';

import LinkButton from './LinkButton';
import { theme } from '../../../../theme';

describe('components/Button', () => {
  describe('<LinkButton />', () => {
    test('renders correctly', () => {
      const { container } = render(<LinkButton>example</LinkButton>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(<LinkButton variant="primary">test button</LinkButton>);

      expect(container.firstChild).toHaveStyle(`color: ${theme.colors.blue06}`);
    });

    test('renders icons correctly', () => {
      const { container } = render(<LinkButton icon={IconDocAdd}>test button</LinkButton>);
      const icon = container.querySelector('svg');

      expect(icon).toBeInTheDocument();
    });
  });
});
