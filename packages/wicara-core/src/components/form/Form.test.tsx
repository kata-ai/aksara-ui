import * as React from 'react';
import { render } from '@testing-library/react';
import {
  FormGroup,
  FormLabel,
  InputText,
  InputTextarea,
  InputGroup,
  InputAddon,
  FormHelp,
  FormError
} from './components';

describe('components/Form', () => {
  test('renders standard text input correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText data-testid="text-input" placeholder="Type here..." />
        <FormHelp>Some help text.</FormHelp>
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
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel data-testid="label-error" errors>
          Email Address
        </FormLabel>
        <InputText errors placeholder="Type here..." />
        <FormError data-testid="input-error">Please enter an email address.</FormError>
      </FormGroup>
    );

    const input = getByTestId('input-error');

    expect(input).toHaveTextContent('Please enter an email address.');
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
