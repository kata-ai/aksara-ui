import * as React from 'react';
import { render } from '@testing-library/react';
import { FormGroup, FormLabel, InputText, InputTextarea, InputGroup, InputAddon, InputMessage } from './components';

describe('components/Form', () => {
  test('renders standard text input correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText data-testid="text-input" placeholder="Type here..." />
      </FormGroup>
    );

    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
  });

  test('renders textarea correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="textarea">Text area</FormLabel>
        <InputTextarea data-testid="text-input" rows={4} placeholder="Type here..." />
      </FormGroup>
    );

    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    const { getByText } = render(
      <FormGroup>
        <FormLabel>Email Address</FormLabel>
        <InputText errors placeholder="Type here..." />
        <InputMessage data-testid="input-error">Please enter an email address.</InputMessage>
      </FormGroup>
    );

    const input = getByText('Please enter an email address.');

    expect(input).toBeInTheDocument();
  });

  test('renders disabled input correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="disabled">Disabled input</FormLabel>
        <InputText data-testid="disabled-input" disabled placeholder="Can't touch this" />
      </FormGroup>
    );

    const input = getByTestId('disabled-input');
    expect(input).toHaveAttribute('disabled');
  });

  test('renders input addon correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <InputGroup>
          <InputAddon data-testid="input-addon">addon text</InputAddon>
          <InputText placeholder="Type here..." addon />
        </InputGroup>
      </FormGroup>
    );

    const addon = getByTestId('input-addon');
    expect(addon).toHaveTextContent('addon text');
  });
});
