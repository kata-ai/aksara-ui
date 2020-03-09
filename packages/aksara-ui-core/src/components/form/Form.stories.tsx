import * as React from 'react';
import { IconLock } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import { Stack, Box, Heading } from '../../foundations';

import {
  InputMessage,
  FormGroup,
  FormLabel,
  InputText,
  InputTextarea,
  InputGroup,
  InputAddon,
  InputLeftElement,
  InputRightElement,
} from './components';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Form',
  component: [
    InputMessage,
    FormGroup,
    FormLabel,
    InputText,
    InputTextarea,
    InputGroup,
    InputAddon,
    InputLeftElement,
    InputRightElement,
  ],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Forms" subtitle="Basic form elements used with Wicara.">
    <Stack spacing="xl">
      <SystemSubheading>Default Theme</SystemSubheading>
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
      <SystemSubheading mb="xl">Input Sizes</SystemSubheading>
      <Box
        mt="md"
        mb="xl"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 2 - 24px), 1fr))"
        gridGap="24px"
      >
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Medium (40px)
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputText id="textDummy" name="textDummy" placeholder="Type here..." size={40} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputGroup>
                <InputAddon isIcon>
                  <IconLock />
                </InputAddon>
                <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." addon />
              </InputGroup>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <FormGroup>
                <InputGroup inputSize={40}>
                  <InputLeftElement>
                    <IconLock />
                  </InputLeftElement>
                  <InputText id="password_dummy" name="password_dummy" placeholder="Type here..." size={40} />
                </InputGroup>
              </FormGroup>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Large (48px)
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputText id="textDummy" name="textDummy" placeholder="Type here..." size={48} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputGroup inputSize={48}>
                <InputAddon isIcon>
                  <IconLock />
                </InputAddon>
                <InputText
                  id="firstName_dummy"
                  name="firstName_dummy"
                  placeholder="Type here..."
                  addon
                  inputSize={48}
                />
              </InputGroup>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputGroup inputSize={48}>
                <InputLeftElement inputSize={48}>
                  <IconLock />
                </InputLeftElement>
                <InputText id="password_dummy" name="password_dummy" placeholder="Type here..." size={48} />
              </InputGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  </SystemBlock>
);

export const AdditionalComponents = () => (
  <SystemBlock title="Forms" subtitle="Basic form elements used with Wicara.">
    <ComponentBlock title="With Error State" withBackground>
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
);
