import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

    test("doesn't close the drawer on when isOverlayClickable is not set", () => {
      const handleClose = jest.fn();
      render(
        <SideSheet labelledById="test-title" isOpen onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </SideSheet>
      );

      const overlay = document.querySelector('[data-radix-portal] > div');
      if (overlay) {
        fireEvent.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(0);
      }
      // fallback for above test - check if overlay exists
      expect(overlay).not.toBeNull();
    });

    test('closes the drawer on when isOverlayClickable is set', () => {
      const handleClose = jest.fn();
      render(
        <SideSheet labelledById="test-title" isOpen isOverlayClickable onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </SideSheet>
      );

      const overlay = document.querySelector('[data-radix-portal] > div');
      if (overlay) {
        fireEvent.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(1);
      }
      // fallback for above test - check if overlay exists
      expect(overlay).not.toBeNull();
    });
  });
});
