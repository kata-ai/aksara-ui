import * as React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

describe('components/Breadcrumb', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Breadcrumb
        items={[
          <BreadcrumbItem href="/">Home</BreadcrumbItem>,
          <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
          <BreadcrumbItem href="/item-2">Item 2</BreadcrumbItem>,
        ]}
      />
    );

    const item1 = getByText(/Item 1/i);
    expect(item1).toBeVisible();

    const item2 = getByText(/Item 2/i);
    expect(item2).toBeVisible();
  });
});
