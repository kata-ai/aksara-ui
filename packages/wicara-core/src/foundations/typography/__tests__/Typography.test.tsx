import * as React from 'react';
import { render } from '@testing-library/react';
import { Text, Heading, Paragraph } from '../index';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/typography', () => {
  test('renders <Text /> correctly', () => {
    const { container } = render(<Text>example</Text>);

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders <Heading /> correctly', () => {
    const { container } = render(<Heading>example</Heading>);

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders <Paragraph /> correctly', () => {
    const { container } = render(<Paragraph>example</Paragraph>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
