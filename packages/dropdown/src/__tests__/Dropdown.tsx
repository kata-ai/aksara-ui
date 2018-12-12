import * as React from 'react';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import DropdownSelector from '../components/DropdownSelector';
import DropdownItem from '../components/DropdownItem';

const options = [
  { label: 'Flavours', header: true },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const onSelect = jest.fn();

describe('DropdownSelector', () => {
  test('renders correctly', () => {
    const { container } = render(
      <DropdownSelector onSelect={onSelect}>
        {options.map(({ label, value, header }, i) => (
          <DropdownItem key={i} value={value} header={header}>
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
        {options.map(({ label, value, header }, i) => (
          <DropdownItem key={i} value={value} header={header}>
            {label}
          </DropdownItem>
        ))}
      </DropdownSelector>
    );

    const dropdownHeader = getByTestId('dropdown-header');
    expect(dropdownHeader.firstChild).toBeInTheDocument();
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
    expect(loading.firstChild).toBeInTheDocument();
  });
});
