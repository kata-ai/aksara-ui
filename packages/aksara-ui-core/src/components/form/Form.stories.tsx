import * as React from 'react';
import { IconLock } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import { Stack, Box, Heading, Text } from '../../foundations';

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
  InputCheckbox,
  InputCheckboxLabel,
  InputRadio,
  InputRadioLabel,
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
          <Box>
            <InputCheckboxLabel htmlFor="checkbox">
              <InputCheckbox id="checkbox" name="checkbox" />
              <Text scale={300} ml="xs">
                Checkbox
              </Text>
            </InputCheckboxLabel>
          </Box>
          <Box>
            <InputRadioLabel htmlFor="r1">
              <InputRadio id="r1" name="radio" value="r1" />
              <Text scale={300} ml="xs">
                Radio 1
              </Text>
            </InputRadioLabel>
          </Box>
          <Box>
            <InputRadioLabel htmlFor="r2">
              <InputRadio id="r2" name="radio" value="r2" />
              <Text scale={300} ml="xs">
                Radio 2
              </Text>
            </InputRadioLabel>
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
      <SystemSubheading mb="xl">Input States</SystemSubheading>
      <Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" alignItems="center" minHeight={72}>
            <Text scale={300}>Default</Text>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup inputSize={40}>
              <InputLeftElement>
                <IconLock />
              </InputLeftElement>
              <InputText id="password_dummy" name="password_dummy" placeholder="Type here..." size={40} />
            </InputGroup>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup>
              <InputAddon isIcon>
                <IconLock />
              </InputAddon>
              <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." addon />
            </InputGroup>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" alignItems="center" minHeight={72}>
            <Text scale={300}>Hover</Text>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputText className="hover" id="textDummy" name="textDummy" placeholder="Type here..." />
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup inputSize={40}>
              <InputLeftElement>
                <IconLock />
              </InputLeftElement>
              <InputText
                className="hover"
                id="password_dummy"
                name="password_dummy"
                placeholder="Type here..."
                size={40}
              />
            </InputGroup>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup>
              <InputAddon isIcon>
                <IconLock />
              </InputAddon>
              <InputText
                className="hover"
                id="firstName_dummy"
                name="firstName_dummy"
                placeholder="Type here..."
                addon
              />
            </InputGroup>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" alignItems="center" minHeight={72}>
            <Text scale={300}>Focus</Text>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputText className="focus" id="textDummy" name="textDummy" placeholder="Type here..." />
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup inputSize={40}>
              <InputLeftElement>
                <IconLock />
              </InputLeftElement>
              <InputText
                className="focus"
                id="password_dummy"
                name="password_dummy"
                placeholder="Type here..."
                size={40}
              />
            </InputGroup>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup>
              <InputAddon isIcon>
                <IconLock />
              </InputAddon>
              <InputText
                className="focus"
                id="firstName_dummy"
                name="firstName_dummy"
                placeholder="Type here..."
                addon
              />
            </InputGroup>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" alignItems="center" minHeight={72}>
            <Text scale={300}>Error</Text>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputText errors id="textDummy" name="textDummy" placeholder="Type here..." />
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup inputSize={40}>
              <InputLeftElement>
                <IconLock />
              </InputLeftElement>
              <InputText errors id="password_dummy" name="password_dummy" placeholder="Type here..." size={40} />
            </InputGroup>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup>
              <InputAddon isIcon>
                <IconLock />
              </InputAddon>
              <InputText errors id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." addon />
            </InputGroup>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" alignItems="center" minHeight={72}>
            <Text scale={300}>Focus with Error</Text>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputText errors className="focus" id="textDummy" name="textDummy" placeholder="Type here..." />
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup inputSize={40}>
              <InputLeftElement>
                <IconLock />
              </InputLeftElement>
              <InputText
                errors
                className="focus"
                id="password_dummy"
                name="password_dummy"
                placeholder="Type here..."
                size={40}
              />
            </InputGroup>
          </Box>
          <Box display="flex" alignItems="center" minHeight={72}>
            <InputGroup>
              <InputAddon isIcon>
                <IconLock />
              </InputAddon>
              <InputText
                errors
                className="focus"
                id="firstName_dummy"
                name="firstName_dummy"
                placeholder="Type here..."
                addon
              />
            </InputGroup>
          </Box>
        </Box>
      </Box>
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
          <Box display="flex" flexDirection="column">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputText id="textDummy" name="textDummy" placeholder="Type here..." size={40} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputGroup inputSize={40}>
                <InputLeftElement>
                  <IconLock />
                </InputLeftElement>
                <InputText id="password_dummy" name="password_dummy" placeholder="Type here..." size={40} />
              </InputGroup>
            </Box>
            <Box display="flex" flexDirection="column">
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <InputGroup>
                  <InputAddon isIcon>
                    <IconLock />
                  </InputAddon>
                  <InputText id="firstName_dummy" name="firstName_dummy" placeholder="Type here..." addon />
                </InputGroup>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Large (48px)
          </Heading>
          <Box display="flex" flexDirection="column">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <InputText id="textDummy" name="textDummy" placeholder="Type here..." size={48} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
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
