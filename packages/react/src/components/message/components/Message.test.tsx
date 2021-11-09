import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Message from './Message';

const handleClose = jest.fn();

describe('components/Message', () => {
  describe('<Message />', () => {
    test('renders correctly', () => {
      const { getByText } = render(<Message variant="success" message="test message" />);

      const messageText = getByText(/test message/i);
      expect(messageText).toBeVisible();
    });

    test('renders with title', () => {
      const { getByRole } = render(<Message variant="success" title="test title" message="test message" />);

      const titleText = getByRole('heading', {
        name: /test title/i,
      });
      expect(titleText).toBeVisible();
    });

    test('renders close button with onClose and fires onClose event correctly', () => {
      const { getByRole } = render(<Message variant="success" message="test message" onClose={handleClose} />);

      const closeButton = getByRole('button', {
        name: /close/i,
      });
      expect(closeButton).toBeVisible();

      fireEvent.click(closeButton);
      expect(handleClose).toBeCalledTimes(1);
    });
  });
});
