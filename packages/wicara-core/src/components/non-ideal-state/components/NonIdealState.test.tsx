import * as React from 'react';
import { render } from '@testing-library/react';
import NonIdealState from './NonIdealState';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('components/NonIdealState', () => {
  test('renders with title', () => {
    const { getByText } = render(<NonIdealState title="Empty Text">Board test</NonIdealState>);

    const title = getByText('Empty Text');
    expect(title).toBeInTheDocument();
  });
});
