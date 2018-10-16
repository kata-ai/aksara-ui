import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import Button from '../../button/src/components/Button';

import Modal from '../src/components/Modal';
import ModalHeader from '../src/components/ModalHeader';
import ModalBody from '../src/components/ModalBody';
import ModalFooter from '../src/components/ModalFooter';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Modal', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({ propTables: [Modal, ModalHeader, ModalBody, ModalFooter] })
  );

story.add(
  'Documentation',
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
              <Button
                color="primary"
                onClick={() => setState({ isOpen: false })}
              >
                Close modal
              </Button>
            </ModalFooter>
          </Modal>
          <Button color="primary" onClick={() => setState({ isOpen: true })}>
            Open modal
          </Button>
        </>
      )}
    </WithState>
  ),
  {
    info: `
  ## Install

  ~~~sh
  # yarn
  yarn add @kata-kit/modal
  # npm
  npm install @kata-kit/modal
  ~~~

  ## Usage

  ~~~jsx
  import { Modal, ModalHeader, ModalBody, ModalFooter } from '@kata-kit/modal';

  <>
  <Modal show={isOpen} onClose={() => setState({ isOpen: false })}>
    <ModalHeader title="Modal" />
    <ModalBody>
      <p>Modal Body</p>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={() => setState({ isOpen: false })}
      >
        Close modal
      </Button>
    </ModalFooter>
  </Modal>
  <Button color="primary" onClick={() => setState({ isOpen: true })}>
    Open modal
  </Button>
  </>
  ~~~
  `
  }
);
