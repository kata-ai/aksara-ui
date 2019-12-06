import * as React from 'react';
import { render } from '@testing-library/react';
import { ComponentBlock } from './ComponentBlock';

describe('utils/storybook', () => {
  describe('ComponentBlock', () => {
    test('renders correctly', () => {
      const { container } = render(
        <ComponentBlock title="Component Title">example</ComponentBlock>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    test('has a title', () => {
      const { getByText } = render(
        <ComponentBlock title="Component Title">example</ComponentBlock>
      );

      expect(getByText('Component Title')).toBeInTheDocument();
    });
  });
});
