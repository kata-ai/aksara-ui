import * as React from 'react';
import { render } from '@testing-library/react';

import SelectBase from '../components/SelectBase';
import SelectAsync from '../components/SelectAsync';
import SelectCreatable from '../components/SelectCreatable';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const loadOptions = jest.fn();

describe('SelectBase', () => {
  test('renders correctly', () => {
    const { container } = render(<SelectBase options={options} />);

    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('SelectAsync', () => {
  test('renders correctly', () => {
    const { container } = render(
      <SelectAsync
        isLoading
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        options={options}
      />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('SelectCreatable', () => {
  test('renders correctly', () => {
    const { container } = render(
      <SelectCreatable isLoading options={options} />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
