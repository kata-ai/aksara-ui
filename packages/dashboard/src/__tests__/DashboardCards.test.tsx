import * as React from 'react';
import { render } from '@testing-library/react';
import { variables } from '@kata-kit/theme';
import { DashboardCards } from '..';
import { Card, CardButton } from '@kata-kit/card';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('CardGrid', () => {
  test('renders correctly', () => {
    const { container } = render(
      <DashboardCards>
        <Card title="Sample Card">
          <CardButton label="Create" icon="add" />
        </Card>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
      </DashboardCards>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with correct centered style', () => {
    const { container } = render(
      <DashboardCards centered>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
      </DashboardCards>
    );

    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
  });

  test('renders with correct cardsPerRow styles', () => {
    const { getByTestId } = render(
      <DashboardCards cardsPerRow={2}>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
        <Card title="Sample Card">Card test</Card>
      </DashboardCards>
    );

    const wrapper = getByTestId('CardGrid-wrapper');
    expect(wrapper).toHaveStyleRule('flex', '0 1 50%', {
      media: `(min-width: ${variables.breaks.breakMedium})`
    });
  });
});
