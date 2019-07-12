import * as React from 'react';
import { render } from '@testing-library/react';

import { Text, Heading, Paragraph } from '..';
import { textSizes, headingSizes, paragraphSizes } from '../../../utils/variables';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/Typography', () => {
  describe('Text', () => {
    test('renders correctly', () => {
      const { container } = render(<Text>children</Text>);

      expect(container).toBeInTheDocument();
    });

    test('renders the correct type scale', () => {
      const { container } = render(<Text size={500}>children</Text>);

      expect(container.firstChild).toHaveStyleRule('font-size', `${textSizes[500].fontSize}px`);
      expect(container.firstChild).toHaveStyleRule('line-height', `${textSizes[500].lineHeight}px`);
    });
  });

  describe('Heading', () => {
    test('renders correctly', () => {
      const { container } = render(<Heading>children</Heading>);

      expect(container).toBeInTheDocument();
    });

    test('renders the correct type scale', () => {
      const { container } = render(<Heading size={700}>children</Heading>);

      expect(container.firstChild).toHaveStyleRule('font-size', `${headingSizes[700].fontSize}px`);
      expect(container.firstChild).toHaveStyleRule('line-height', `${headingSizes[700].lineHeight}px`);
    });
  });

  describe('Paragraph', () => {
    test('renders correctly', () => {
      const { container } = render(<Paragraph>children</Paragraph>);

      expect(container).toBeInTheDocument();
    });

    test('renders the correct type scale', () => {
      const { container } = render(<Paragraph size={400}>children</Paragraph>);

      expect(container.firstChild).toHaveStyleRule('font-size', `${paragraphSizes[400].fontSize}px`);
      expect(container.firstChild).toHaveStyleRule('line-height', `${paragraphSizes[400].lineHeight}px`);
    });
  });
});
