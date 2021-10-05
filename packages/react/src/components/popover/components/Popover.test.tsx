import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from './Popover';

describe('components/Popover', () => {
  describe('<Popover />', () => {
    test("doesn't render popover content by default", () => {
      const { getByRole } = render(
        <Popover trigger={<button type="button">Toggle Popover</button>}>
          <div style={{ width: 250 }}>This is a popover</div>
        </Popover>
      );

      expect(getByRole('button', { name: /toggle popover/i })).toBeVisible();
    });

    test('is enabled by clicking the trigger', () => {
      const { getByRole, queryByText } = render(
        <Popover trigger={<button type="button">Toggle Popover</button>}>
          <div style={{ width: 250 }}>This is a popover</div>
        </Popover>
      );

      const triggerButton = getByRole('button', { name: /toggle popover/i });
      fireEvent.click(triggerButton);

      expect(queryByText(/This is a popover/)).toBeVisible();
    });
  });
});
