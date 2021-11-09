import * as React from 'react';
import { render, within } from '@testing-library/react';

import { Box } from '../../box';
import Wrap from './Wrap';
import WrapItem from './WrapItem';

jest.mock('../../../theme');

describe('layout/wrap', () => {
  test('renders <Wrap /> correctly', () => {
    const { getByRole } = render(
      <Wrap>
        <WrapItem>
          <Box>example</Box>
        </WrapItem>
        <WrapItem>
          <Box>example</Box>
        </WrapItem>
        <WrapItem>
          <Box>example</Box>
        </WrapItem>
      </Wrap>
    );

    const list = getByRole('list');
    expect(list).toBeVisible();

    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
  });
});
