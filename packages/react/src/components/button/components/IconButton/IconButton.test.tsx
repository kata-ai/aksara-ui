import * as React from 'react';
import { render } from '@testing-library/react';
import IconButton from './IconButton';
import IconButtonAnchor from './IconButtonAnchor';

describe('components/Button', () => {
  describe('<IconButton />', () => {
    test('renders correctly', () => {
      const { container } = render(
        <IconButton>
          <i className="icon-trash" />
        </IconButton>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders selected styles correctly', () => {
      const { container } = render(
        <IconButton variant="outline" selected>
          <i className="icon-add" />
        </IconButton>
      );

      expect(container.firstChild).toHaveClass('selected');
    });
  });

  describe('<IconButtonAnchor />', () => {
    test('renders correctly', () => {
      const { container } = render(
        <IconButtonAnchor href="#">
          <i className="icon-trash" />
        </IconButtonAnchor>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
