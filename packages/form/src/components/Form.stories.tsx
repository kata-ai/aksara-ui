import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormError from './FormError';
import InputText from './InputText';
import InputAddon from './InputAddon';
import InputTextarea from './InputTextarea';
import InputGroup from './InputGroup';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Form', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <FormGroup>
          <FormLabel htmlFor="textDummy">Text input</FormLabel>
          <InputText
            id="textDummy"
            name="textDummy"
            placeholder="Type here..."
          />
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
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    'form layout',
    () => (
      <div>
        <FormGroup>
          <FormLabel htmlFor="textDummy">Text input</FormLabel>
          <InputText
            id="textDummy"
            name="textDummy"
            placeholder="Type here..."
          />
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
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    'error state',
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
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add('input addon', () => (
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
  ));
