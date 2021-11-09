import * as React from 'react';
import { render } from '@testing-library/react';
import PanelFooter from './PanelFooter';

describe('components/Panel', () => {
  describe('PanelFooter', () => {
    test('renders correctly', () => {
      const { container } = render(<PanelFooter>example</PanelFooter>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
