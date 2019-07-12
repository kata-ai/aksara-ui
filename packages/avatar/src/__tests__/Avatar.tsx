import * as React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('Avatar', () => {
  test('renders on large size by default', () => {
    const { container } = render(<Avatar src={require('@kata-kit/assets/images/logo-white.svg')} />);

    expect(container.firstChild).toHaveStyleRule('width', '40px');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  test('renders in correct sizes', () => {
    const { container } = render(<Avatar size={24} src={require('@kata-kit/assets/images/logo-white.svg')} />);

    expect(container.firstChild).toHaveStyleRule('width', '24px');
    expect(container.firstChild).toHaveStyleRule('height', '24px');
  });
});
