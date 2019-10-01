import * as React from 'react';
import { render } from '@testing-library/react';
import { ComponentBlock } from './ComponentBlock';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('utils/storybook', () => {
  test('renders correctly', () => {
    const { container } = render(<ComponentBlock title="Component Title">example</ComponentBlock>);

    expect(container.firstChild).toBeInTheDocument();
  });

  test('has a title', () => {
    const { getByText } = render(<ComponentBlock title="Component Title">example</ComponentBlock>);

    expect(getByText('Component Title')).toBeInTheDocument();
  });
});
