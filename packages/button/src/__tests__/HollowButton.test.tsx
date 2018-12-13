import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { render } from 'react-testing-library';
import { HollowButton } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('SupportButton', () => {
  test('renders with correct colors', () => {
    const { container } = render(<HollowButton>test button</HollowButton>);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      variables.colors.gray70
    );
  });

  test('renders correctly as disabled', () => {
    const { container } = render(
      <HollowButton disabled>test button</HollowButton>
    );

    expect(container.firstChild).toHaveAttribute('disabled', '');
  });

  test('renders with loading icon', () => {
    const { getByTestId } = render(
      <HollowButton loading>test button</HollowButton>
    );

    const loader = getByTestId('circle-icon');
    expect(loader).toBeInTheDocument();
  });
});
