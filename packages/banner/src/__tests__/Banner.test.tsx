import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { render, fireEvent } from 'react-testing-library';
import { Banner } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Badge', () => {
  test('renders with custom state', () => {
    const { container } = render(
      <Banner state="success" message="test banner" />
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      variables.colors.green
    );

    expect(container.firstChild).toHaveStyleRule(
      'color',
      variables.colors.white
    );
  });

  test('renders close button with onClose', () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Banner state="success" message="test banner" onClose={handleClose} />
    );

    const closeButton = getByLabelText('Close', { selector: 'button' });
    expect(closeButton).toBeInTheDocument();
  });

  test('fires the onClose event', () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Banner state="success" message="test banner" onClose={handleClose} />
    );

    const closeButton = getByLabelText('Close', { selector: 'button' });
    fireEvent.click(closeButton);
    expect(handleClose).toBeCalledTimes(1);
  });
});
