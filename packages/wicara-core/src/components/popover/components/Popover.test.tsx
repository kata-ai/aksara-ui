import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from './Popover';

describe('components/Popover', () => {
  describe('<Popover />', () => {
    test("doesn't render popover content by default", () => {
      const { queryByText } = render(
        <Popover trigger={<button type="button">Toggle Popover</button>}>
          <div style={{ width: 250 }}>This is a popover</div>
        </Popover>
      );

      expect(queryByText(/This is a popover/)).not.toBeInTheDocument();
    });

    test('is enabled by clicking the trigger', () => {
      const { getByText, queryByText } = render(
        <Popover trigger={<button type="button">Toggle Popover</button>}>
          <div style={{ width: 250 }}>This is a popover</div>
        </Popover>
      );

      const triggerButton = getByText('Toggle Popover');
      fireEvent.click(triggerButton);

      expect(queryByText(/This is a popover/)).toBeInTheDocument();
    });
  });
});
