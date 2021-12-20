import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Heading } from '../../../typography';

import Modal from './Modal';
import { BoxHeader } from '../../box-header-footer';

describe('components/Modal', () => {
  describe('<Modal />', () => {
    test('renders correctly', () => {
      const { getByText } = render(
        <Modal labelledById="test-title" isOpen content={<p id="test-title">Basic Example</p>} />
      );

      expect(getByText('Basic Example')).toBeInTheDocument();
    });

    test('handles onClose', () => {
      const handleClose = jest.fn();
      const { getByLabelText } = render(
        <Modal
          labelledById="test-title"
          isOpen
          onClose={handleClose}
          header={
            <BoxHeader
              closeButtonHandler={handleClose}
              centerTitle
              size="lg"
              title={
                <Heading scale={500} id="stories-title" textAlign="center">
                  Title
                </Heading>
              }
            />
          }
          content={<p id="test-title">Basic Example</p>}
        />
      );

      const closeButton = getByLabelText('Close');
      fireEvent.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('closes the drawer on when disableOverlayClick is not set', () => {
      const handleClose = jest.fn();
      render(
        <Modal labelledById="test-title" isOpen onClose={handleClose} content={<p id="test-title">Basic Example</p>} />
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
        <Modal
          labelledById="test-title"
          isOpen
          disableOverlayClick
          onClose={handleClose}
          content={<p id="test-title">Basic Example</p>}
        />
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
