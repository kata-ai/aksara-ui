import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { colors } from '../../../utils';
import Message from './Message';

const handleClose = jest.fn();

describe('components/Banner', () => {
  describe('<Banner />', () => {
    test('renders with custom state', () => {
      const { container } = render(<Message state="success" message="test banner" />);

      expect(container.firstChild).toHaveStyleRule('background-color', colors.grey01);
      expect(container.firstChild).toHaveStyleRule('color', colors.green07);
    });

    test('renders close button with onClose', () => {
      const { getByTestId } = render(<Message state="success" message="test banner" onClose={handleClose} />);

      const closeButton = getByTestId('Banner-closeButton');
      expect(closeButton).toBeInTheDocument();
    });

    test('fires the onClose event', () => {
      const { getByTestId } = render(<Message state="success" message="test banner" onClose={handleClose} />);

      const closeButton = getByTestId('Banner-closeButton');
      fireEvent.click(closeButton);
      expect(handleClose).toBeCalledTimes(1);
    });
  });
});
