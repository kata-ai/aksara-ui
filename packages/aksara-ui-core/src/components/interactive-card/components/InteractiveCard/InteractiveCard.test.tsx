import * as React from 'react';
import { render } from '@testing-library/react';

import InteractiveCard from './InteractiveCard';
import { Button } from '../../../button';

describe('components/InteractiveCard', () => {
  describe('<InteractiveCard />', () => {
    test('renders correctly', () => {
      const { container } = render(<InteractiveCard>henlo</InteractiveCard>);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders icons correctly', () => {
      const { getByText } = render(
        <InteractiveCard actions={<Button size={32}>action</Button>}>test card</InteractiveCard>
      );

      expect(getByText('action')).toBeInTheDocument();
    });
  });
});
