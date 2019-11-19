import * as React from 'react';
import { render } from '@testing-library/react';
import UnstyledButton from './UnstyledButton';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/common', () => {
  test('renders <UnstyledButton /> correctly', () => {
    const { container } = render(<UnstyledButton>example</UnstyledButton>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
