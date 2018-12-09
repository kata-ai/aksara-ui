import * as React from 'react';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';
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
        {options.map(({ label, value }) => (
          <DropdownItem key={value} value={value}>
            {label}
          </DropdownItem>
        ))}
      </DropdownSelector>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
