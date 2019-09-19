import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';
import WithState from '../../../../.storybook/components/WithState';

import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

import { FormGroup, InputText, FormLabel } from '../../../form/src';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Modal', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <WithState initialState={{ isOpen: false }}>
        {({ isOpen }, { setState }) => (
          <>
            <Modal show={isOpen} onClose={() => setState({ isOpen: false })}>
              <ModalHeader title="Modal" />
              <ModalBody>
                <p>Modal Body</p>
              </ModalBody>
              <ModalFooter>
                <button
                  type="button"
                  onClick={() => setState({ isOpen: false })}
                >
                  Close modal
                </button>
              </ModalFooter>
            </Modal>
            <button type="button" onClick={() => setState({ isOpen: true })}>
              Open modal
            </button>
          </>
        )}
      </WithState>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    'with form',
    () => (
      <WithState initialState={{ isOpen: false }}>
        {({ isOpen }, { setState }) => (
          <>
            <Modal show={isOpen} onClose={() => setState({ isOpen: false })}>
              <ModalHeader title="Modal" />
              <ModalBody>
                <FormGroup>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <InputText id="username" name="username" type="text" />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputText id="password" name="password" type="password" />
                </FormGroup>
                <FormGroup>
                  <button onClick={() => alert('hello')}>Click me</button>
                </FormGroup>
                <FormGroup>
                  <input type="file" />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <button
                  type="button"
                  onClick={() => setState({ isOpen: false })}
                >
                  Close modal
                </button>
              </ModalFooter>
            </Modal>
            <button type="button" onClick={() => setState({ isOpen: true })}>
              Open modal
            </button>
          </>
        )}
      </WithState>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
