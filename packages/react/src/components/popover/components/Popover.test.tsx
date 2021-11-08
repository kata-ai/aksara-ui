import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

describe('components/Popover', () => {
  describe('<Popover />', () => {
    test("doesn't render popover content by default", () => {
      const { getByRole } = render(
        <Popover>
          <PopoverTrigger>
            <button type="button">Toggle Popover</button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ width: 250 }}>This is a popover</div>
          </PopoverContent>
        </Popover>
      );

      expect(getByRole('button', { name: /toggle popover/i })).toBeVisible();
    });

    test('is enabled by clicking the trigger', () => {
      const { getByRole, queryByText } = render(
        <Popover>
          <PopoverTrigger>
            <button type="button">Toggle Popover</button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ width: 250 }}>This is a popover</div>
          </PopoverContent>
        </Popover>
      );

      const triggerButton = getByRole('button', { name: /toggle popover/i });
      fireEvent.click(triggerButton);

      expect(queryByText(/This is a popover/)).toBeInTheDocument();
    });
  });
});
