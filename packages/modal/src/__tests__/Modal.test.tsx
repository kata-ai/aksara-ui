import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

const handleClose = jest.fn();

describe('Modal', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Modal show onClose={handleClose}>
        <ModalHeader title="Modal" />
        <ModalBody>
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    const wrapper = getByTestId('Modal-wrapper');
    expect(wrapper).toHaveClass('is-open');
  });

  test('has visibility: hidden when show === false', () => {
    const { getByTestId } = render(
      <Modal show={false} onClose={handleClose}>
        <ModalHeader title="Modal" />
        <ModalBody>
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    const wrapper = getByTestId('Modal-wrapper');
    expect(wrapper).not.toHaveClass('is-open');
  });

  test('handles onClose', () => {
    const { getByTestId } = render(
      <Modal show onClose={handleClose}>
        <ModalHeader title="Modal" />
        <ModalBody>
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    const closeButton = getByTestId('ModalHeader-closeButton');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
