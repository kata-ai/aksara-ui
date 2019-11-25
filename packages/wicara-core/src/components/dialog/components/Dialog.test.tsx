import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Dialog from './Dialog';

describe('components/Dialog', () => {
  describe('<Dialog />', () => {
    test('renders correctly', () => {
      const { getByText } = render(
        <Dialog labelledById="test-title" isOpen>
          <p id="test-title">Basic Example</p>
        </Dialog>
      );

      expect(getByText('Basic Example')).toBeInTheDocument();
    });

    test('handles onClose', () => {
      const handleClose = jest.fn();
      const { getByLabelText } = render(
        <Dialog labelledById="test-title" isOpen onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </Dialog>
      );

      const closeButton = getByLabelText('Close');
      fireEvent.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
