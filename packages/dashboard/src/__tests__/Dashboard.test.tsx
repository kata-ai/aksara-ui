import * as React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('Dashboard', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Dashboard title="Dashboard Title">DashboardContent</Dashboard>
    );

    const title = getByTestId('Dashboard-title');
    const content = getByTestId('Dashboard-content');

    expect(title).toHaveTextContent('Dashboard Title');
    expect(content).toHaveTextContent('DashboardContent');
  });

  test('renders with floating element', () => {
    const { getByTestId } = render(
      <Dashboard
        title="Dashboard Title"
        floatingElements={<div>I'm floating!</div>}
      >
        DashboardContent
      </Dashboard>
    );

    const floating = getByTestId('Dashboard-floating');

    expect(floating).toBeInTheDocument();
  });

  test('renders starter layout', () => {
    const { container } = render(
      <Dashboard isStarter title="Wicara Demo">
        DashboardContent
      </Dashboard>
    );

    expect(container.firstChild).toHaveClass('is-starter');
  });
});
