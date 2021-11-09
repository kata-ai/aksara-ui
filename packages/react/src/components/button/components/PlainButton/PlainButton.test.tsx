import * as React from 'react';
import { render } from '@testing-library/react';
import { IconDocAdd } from '@aksara-ui/icons';

import PlainButton from './PlainButton';

describe('components/Button', () => {
  describe('<LinkButton />', () => {
    test('renders correctly', () => {
      const { container } = render(<PlainButton>example</PlainButton>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(<PlainButton variant="primary">test button</PlainButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders icons correctly', () => {
      const { container } = render(<PlainButton icon={IconDocAdd}>test button</PlainButton>);
      const icon = container.querySelector('svg');

      expect(icon).toBeInTheDocument();
    });
  });
});
