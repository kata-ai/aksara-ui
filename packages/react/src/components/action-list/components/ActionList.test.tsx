import * as React from 'react';
import { render } from '@testing-library/react';

import ActionList from './ActionList';
import ActionListItem from './ActionListItem';

describe('components/ActionList', () => {
  describe('<ActionList />', () => {
    test('renders correctly', () => {
      const { container } = render(<ActionList>example</ActionList>);

      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders actionList with item correctly', () => {
      const { container } = render(
        <ActionList>
          <ActionListItem isActive>Label 1</ActionListItem>
          <ActionListItem disabled>Label 2</ActionListItem>
          <ActionListItem disabled>Label 2</ActionListItem>
        </ActionList>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
