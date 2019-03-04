import React from 'react';
import { render } from 'react-testing-library';

import {
  Text,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  WicaraThemeProvider
} from '../..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Layout', () => {
  test('renders correctly', () => {
    const { container } = render(<Text>hello</Text>);

    expect(container.firstChild).toBeInTheDocument();
  });

  test('generates color', () => {
    const { container } = render(
      <WicaraThemeProvider>
        <Text color="kata02">hello</Text>
      </WicaraThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('color', '#006fe6');
  });

  test('generates margin', () => {
    const { container } = render(<Text my={2}>hello</Text>);

    expect(container.firstChild).toHaveStyleRule('margin-top', '8px');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '8px');
  });

  test('correctly renders heading units (headings)', () => {
    const { getByTestId } = render(
      <>
        <Heading1 data-testid="h1">hello</Heading1>
        <Heading2 data-testid="h2">hello</Heading2>
        <Heading3 data-testid="h3">hello</Heading3>
        <Heading4 data-testid="h4">hello</Heading4>
        <Paragraph data-testid="p">hello</Paragraph>
      </>
    );

    expect(getByTestId('h1')).toBeInstanceOf(HTMLHeadingElement);
    expect(getByTestId('h2')).toBeInstanceOf(HTMLHeadingElement);
    expect(getByTestId('h3')).toBeInstanceOf(HTMLHeadingElement);
    expect(getByTestId('h4')).toBeInstanceOf(HTMLHeadingElement);
    expect(getByTestId('p')).toBeInstanceOf(HTMLParagraphElement);
  });
});
