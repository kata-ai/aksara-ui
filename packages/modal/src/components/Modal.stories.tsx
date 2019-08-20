import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';
import WithState from '../../../../.storybook/components/WithState';

import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

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
  );
