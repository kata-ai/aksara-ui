import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from './Modal';

describe('components/Modal', () => {
  describe('<Modal />', () => {
    test('renders correctly', () => {
      const { getByText } = render(
        <Modal labelledById="test-title" isOpen>
          <p id="test-title">Basic Example</p>
        </Modal>
      );

      expect(getByText('Basic Example')).toBeInTheDocument();
    });

    test('handles onClose', () => {
      const handleClose = jest.fn();
      const { getByLabelText } = render(
        <Modal labelledById="test-title" isOpen onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </Modal>
      );

      const closeButton = getByLabelText('Close');
      fireEvent.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('closes the drawer on when disableOverlayClick is not set', () => {
      const handleClose = jest.fn();
      render(
        <Modal labelledById="test-title" isOpen onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </Modal>
      );

      const overlay = document.querySelector('[data-radix-portal] > div');
      if (overlay) {
        fireEvent.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(1);
      }
      // fallback for above test - check if overlay exists
      expect(overlay).not.toBeNull();
    });

    test("doesn't close the drawer on when disableOverlayClick is set", () => {
      const handleClose = jest.fn();
      render(
        <Modal labelledById="test-title" isOpen disableOverlayClick onClose={handleClose}>
          <p id="test-title">Basic Example</p>
        </Modal>
      );

      const overlay = document.querySelector('[data-radix-portal] > div');
      if (overlay) {
        fireEvent.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(0);
      }
      // fallback for above test - check if overlay exists
      expect(overlay).not.toBeNull();
    });
  });
});
