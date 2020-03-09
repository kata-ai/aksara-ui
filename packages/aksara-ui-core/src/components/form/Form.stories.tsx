import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IconLock } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import { Stack, Box } from '../../foundations';

import {
  InputMessage,
  FormGroup,
  FormLabel,
  InputText,
  InputTextarea,
  InputGroup,
  InputAddon,
  InputLeftElement,
} from './components';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Form', module).addDecorator(SystemWrapper);

story.add(
  'basic',
  () => (
    <SystemBlock title="Forms" subtitle="Basic form elements used with Wicara.">
      <Stack spacing="xl">
        <ComponentBlock title="Basic Example" withBackground>
          <Stack spacing="md">
            <Box>
              <FormLabel htmlFor="textDummy">Text input</FormLabel>
              <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
            </Box>
            <Box>
              <FormLabel htmlFor="disabled">Disabled input</FormLabel>
              <InputText id="disabled" name="disabled" disabled placeholder="Can't touch this" />
            </Box>
            <Box>
              <FormLabel htmlFor="textarea">Text area</FormLabel>
              <InputTextarea id="textarea" name="textarea" rows={4} placeholder="Type here..." />
            </Box>
          </Stack>
        </ComponentBlock>
        <ComponentBlock title="With Addon" withBackground>
          <Stack spacing="md">
            <FormGroup>
              <InputGroup>
                <InputAddon>dashboard.kata.ai/</InputAddon>
                <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." addon />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputAddon isIcon>
                  <IconLock />
                </InputAddon>
                <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." addon />
              </InputGroup>
            </FormGroup>
          </Stack>
        </ComponentBlock>
        <ComponentBlock title="With Element" withBackground>
          <Stack spacing="md">
            <FormGroup>
              <InputGroup>
                <InputLeftElement>
                  <IconLock />
                </InputLeftElement>
                <InputText id="password_dummy" name="password_dummy" placeholder="Type here..." />
              </InputGroup>
            </FormGroup>
          </Stack>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);

story.add(
  'additional labels',
  () => (
    <SystemBlock title="Forms" subtitle="Basic form elements used with Wicara.">
      <ComponentBlock title="With Error State">
        <FormGroup>
          <FormLabel htmlFor="firstName_dummy">First Name</FormLabel>
          <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email_dummy">Email Address</FormLabel>
          <InputText id="email_dummy" name="email_dummy" errors placeholder="Type here..." />
          <InputMessage variant="error">Please enter an email address.</InputMessage>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email_dummy">Confirm Password</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IconLock />
            </InputLeftElement>
            <InputText id="password_dummy" name="password_dummy" placeholder="Type here..." />
          </InputGroup>
          <InputMessage variant="success">Passwords match!</InputMessage>
        </FormGroup>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: {
      markdown: readme,
    },
  }
);
