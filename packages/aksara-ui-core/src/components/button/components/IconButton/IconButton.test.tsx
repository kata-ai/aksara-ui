import * as React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../../../utils';
import IconButton from './IconButton';

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

    test('renders in different sizes', () => {
      const { container } = render(
        <>
          <IconButton size={32}>
            <i className="icon-trash" />
          </IconButton>
          <IconButton size={40}>
            <i className="icon-trash" />
          </IconButton>
        </>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders colors correctly by variant', () => {
      const { container } = render(
        <IconButton variant="destructive">
          <i className="icon-add" />
        </IconButton>
      );

      expect(container.firstChild).toHaveStyle(`color: ${colors.red05}`);
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
});
