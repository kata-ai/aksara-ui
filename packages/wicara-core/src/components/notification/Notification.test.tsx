import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { notification } from './index';

import { Button } from '../button';

describe('components/Notification', () => {
  describe('toaster', () => {
    test('renders the portal element', () => {
      const { baseElement } = render(
        <Button
          variant="primary"
          onClick={() => {
            notification.toaster({
              title: 'Toaster',
              message: 'Hello world! This is a toaster',
              status: 'success',
              dismissible: true,
              dismissAfter: 5000,
            });
          }}
        >
          Push Me
        </Button>
      );

      const element = baseElement.querySelector("div[data-aksara-notification-container='']");
      expect(element).toBeInTheDocument();
    });

    test('renders notification when method is called', () => {
      jest.useFakeTimers();

      const { getAllByText, baseElement } = render(
        <Button
          variant="primary"
          onClick={() => {
            notification.toaster({
              id: 'test-toaster',
              title: 'Toaster',
              message: 'Hello world! This is a toaster',
              status: 'success',
              dismissible: true,
              dismissAfter: 5000,
            });
          }}
        >
          Push Me
        </Button>
      );

      fireEvent.click(getAllByText('Push Me')[0]);

      setTimeout(() => {
        const element = baseElement.querySelector('#test-toaster-1');
        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute('data-state', 'entered');
      }, 1000);

      jest.runAllTimers();
    });
  });
});
