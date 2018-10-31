import * as React from 'react';
import { render } from 'react-testing-library';
import { variables } from '@kata-kit/theme';
import { Card, CardGrid } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('CardGrid', () => {
  test('renders with correct centered style', () => {
    const { container } = render(
      <CardGrid centered>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
      </CardGrid>
    );

    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
  });

  test('renders with correct cardsPerRow styles', () => {
    const { getByTestId } = render(
      <CardGrid cardsPerRow={2}>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
      </CardGrid>
    );

    const wrapper = getByTestId('CardGrid-wrapper');
    expect(wrapper).toHaveStyleRule('flex', '0 1 50%', {
      media: `(min-width: ${variables.breaks.breakMedium})`
    });
  });
});
