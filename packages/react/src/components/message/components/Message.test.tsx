import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Message from './Message';

const handleClose = jest.fn();

describe('components/Banner', () => {
  describe('<Banner />', () => {
    test('renders correctly', () => {
      const { container } = render(<Message variant="success" message="test banner" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders with title', () => {
      const { getByText } = render(<Message variant="success" title="test title" message="test banner" />);

      const titleText = getByText('test title');
      expect(titleText).toBeInTheDocument();
    });

    test('renders close button with onClose', () => {
      const { getByTestId } = render(<Message variant="success" message="test banner" onClose={handleClose} />);

      const closeButton = getByTestId('Banner-closeButton');
      expect(closeButton).toBeInTheDocument();
    });

    test('fires the onClose event', () => {
      const { getByTestId } = render(<Message variant="success" message="test banner" onClose={handleClose} />);

      const closeButton = getByTestId('Banner-closeButton');
      fireEvent.click(closeButton);
      expect(handleClose).toBeCalledTimes(1);
    });
  });
});
