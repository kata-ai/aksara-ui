import * as React from 'react';
import { render } from 'react-testing-library';
import { Dashboard } from '..';

import 'jest-dom/extend-expect';
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

  test('renders starter layout', () => {
    const { container } = render(
      <Dashboard isStarter title="kata-kit Demo">
        DashboardContent
      </Dashboard>
    );

    expect(container.firstChild).toHaveClass('is-starter');
  });
});
