import * as React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import DropdownSelector from '../components/DropdownSelector';
import DropdownItem from '../components/DropdownItem';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const onSelect = jest.fn();

describe('DropdownSelector', () => {
  test('renders correctly', () => {
    const { container } = render(
      <DropdownSelector onSelect={onSelect}>
        {options.map(({ label, value }, i) => (
          <DropdownItem key={i} value={value}>
            {label}
          </DropdownItem>
        ))}
      </DropdownSelector>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders heading correctly', () => {
    const { getByTestId } = render(
      <DropdownSelector onSelect={onSelect}>
        <DropdownItem header>Header</DropdownItem>
      </DropdownSelector>
    );

    const dropdownHeader = getByTestId('dropdown-header');
    expect(dropdownHeader).toBeInTheDocument();
  });

  test('renders divider correctly', () => {
    const { getByTestId } = render(
      <DropdownSelector onSelect={onSelect}>
        <DropdownItem divider />
      </DropdownSelector>
    );

    const dropdownDivider = getByTestId('dropdown-divider');
    expect(dropdownDivider).toBeInTheDocument();
  });

  test('displays loading component when dropdown selector is loading', () => {
    const { getByTestId } = render(
      <DropdownSelector onSelect={onSelect} loading>
        {options.map(({ label, value }) => (
          <DropdownItem key={value} value={value}>
            {label}
          </DropdownItem>
        ))}
      </DropdownSelector>
    );

    const loading = getByTestId('dropdown-toggle-loading');
    expect(loading).toBeInTheDocument();
  });
});
