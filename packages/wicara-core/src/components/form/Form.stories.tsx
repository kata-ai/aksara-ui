import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';

import {
  FormError,
  FormGroup,
  FormLabel,
  InputText,
  InputTextarea,
  FormHelp,
  InputGroup,
  InputAddon
} from './components';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Form', module).addDecorator(StorybookWrapper);

story.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader title="Forms" subtitle="Basic form elements used with Wicara." />
      <ComponentBlock title="Basic Example">
        <FormGroup>
          <FormLabel htmlFor="textDummy">Text input</FormLabel>
          <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="disabled">Disabled input</FormLabel>
          <InputText id="disabled" name="disabled" disabled placeholder="Can't touch this" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="textarea">Text area</FormLabel>
          <InputTextarea id="textarea" name="textarea" rows={4} placeholder="Type here..." />
        </FormGroup>
      </ComponentBlock>
      <ComponentBlock title="With Addon">
        <FormGroup>
          <InputGroup>
            <InputAddon>dashboard.kata.ai/</InputAddon>
            <InputText
              id="firstName_dummy"
              name="firstName_dummy"
              placeholder="Type here..."
              addon
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputAddon isIcon>
              <i className="icon-account" />
            </InputAddon>
            <InputText
              id="firstName_dummy"
              name="firstName_dummy"
              placeholder="Type here..."
              addon
            />
          </InputGroup>
        </FormGroup>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);

story.add(
  'additional labels',
  () => (
    <StoryContainer>
      <StoryHeader title="Forms" subtitle="Basic form elements used with Wicara." />
      <ComponentBlock title="Form Help">
        <FormGroup>
          <FormLabel htmlFor="billingAddress_dummy">Billing Address</FormLabel>
          <InputTextarea
            id="billingAddress_dummy"
            name="billingAddress_dummy"
            placeholder="Type here..."
          />
          <FormHelp>The address we&apos;ll ship your billing details to.</FormHelp>
        </FormGroup>
      </ComponentBlock>
      <ComponentBlock title="With Error State">
        <FormGroup>
          <FormLabel htmlFor="firstName_dummy">First Name</FormLabel>
          <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email_dummy" errors>
            Email Address
          </FormLabel>
          <InputText id="email_dummy" name="email_dummy" errors placeholder="Type here..." />
          <FormError>Please enter an email address.</FormError>
        </FormGroup>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: {
      markdown: readme
    }
  }
);
