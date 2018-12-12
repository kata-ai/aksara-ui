import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import FormGroup from '@kata-kit/form/src/components/FormGroup';
import FormLabel from '@kata-kit/form/src/components/FormLabel';
import FormError from '@kata-kit/form/src/components/FormError';
import InputText from '@kata-kit/form/src/components/InputText';
import InputAddon from '@kata-kit/form/src/components/InputAddon';
import InputTextarea from '@kata-kit/form/src/components/InputTextarea';
import InputGroup from '@kata-kit/form/src/components/InputGroup';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Form', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({
      propTables: [
        FormGroup,
        FormLabel,
        FormError,
        InputText,
        InputTextarea,
        InputAddon
      ]
    })
  );

const infoText = `
## Install

~~~sh
# yarn
yarn add @kata-kit/form
# npm
npm install @kata-kit/form
~~~

## Usage

~~~jsx
import { InputText } from '@kata-kit/form';

const Component = ({ children }) => (
  <InputText name="username" placeholder="Username" />
);
~~~
`;

story.add(
  'Documentation',
  () => (
    <div>
      <FormGroup>
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="disabled">Disabled input</FormLabel>
        <InputText
          id="disabled"
          name="disabled"
          disabled
          placeholder="Can't touch this"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="textarea">Text area</FormLabel>
        <InputTextarea
          id="textarea"
          name="textarea"
          rows={4}
          placeholder="Type here..."
        />
      </FormGroup>
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
    </div>
  ),
  { info: { text: infoText } }
);

story.add(
  'Basic Example',
  () => (
    <div>
      <InputText id="textDummy" name="textDummy" placeholder="Text input" />
      <br />
      <InputText
        id="disabled"
        name="disabled"
        disabled
        placeholder="Disabled input"
      />
      <br />
      <InputTextarea
        id="textarea"
        name="textarea"
        rows={4}
        placeholder="Text area"
      />
    </div>
  ),
  { info: { disable: true } }
);

story.add(
  'Form Layout',
  () => (
    <div>
      <FormGroup>
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="disabled">Disabled input</FormLabel>
        <InputText
          id="disabled"
          name="disabled"
          disabled
          placeholder="Can't touch this"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="textarea">Text area</FormLabel>
        <InputTextarea
          id="textarea"
          name="textarea"
          rows={4}
          placeholder="Type here..."
        />
      </FormGroup>
    </div>
  ),
  { info: { disable: true } }
);

story.add(
  'Error State',
  () => (
    <div>
      <FormGroup>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <InputText
          id="firstName_dummy"
          name="firstName_dummy"
          placeholder="Type here..."
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email_dummy" errors>
          Email Address
        </FormLabel>
        <InputText
          id="email_dummy"
          name="email_dummy"
          errors
          placeholder="Type here..."
        />
        <FormError>Please enter an email address.</FormError>
      </FormGroup>
    </div>
  ),
  { info: { disable: true } }
);

story.add(
  'Input Addon',
  () => (
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
  ),
  { info: { disable: true } }
);
