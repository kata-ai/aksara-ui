import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';

import { FormGroup, FormLabel, InputText } from './components';
import { Text } from '../../foundations';

const readme = require('./README.md');

storiesOf('Core|Components/Form', module)
  .addDecorator(StorybookWrapper)
  .add(
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
        </ComponentBlock>
        <ComponentBlock title="With Addon">
          <Text>This component is still in progress.</Text>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  );
