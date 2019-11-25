import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import SideSheet from './SideSheet';

describe('components/SideSheet', () => {
  describe('<SideSheet />', () => {
    test('renders correctly', () => {
      const { getByText } = render(
        <SideSheet labelledById="test-title" isOpen>
          <p id="test-title">Basic Example</p>
        </SideSheet>
      );

      expect(getByText('Basic Example')).toBeInTheDocument();
    });

    test('handles onClose', () => {
      const handleClose = jest.fn();
      const { getByLabelText } = render(
        <SideSheet labelledById="test-title" isOpen onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </SideSheet>
      );

      const closeButton = getByLabelText('Close');
      fireEvent.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
