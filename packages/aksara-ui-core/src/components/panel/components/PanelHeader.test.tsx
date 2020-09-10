import * as React from 'react';
import { render } from '@testing-library/react';
import PanelHeader from './PanelHeader';

describe('components/Panel', () => {
  describe('PanelHeader', () => {
    test('renders correctly', () => {
      const { container } = render(<PanelHeader>example</PanelHeader>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
