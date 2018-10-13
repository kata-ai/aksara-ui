import * as React from 'react';
import { setAddon, storiesOf, StoryDecorator } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import JSXAddon from 'storybook-addon-jsx';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Button from '../../button/src/components/Button';

import Modal from '../src/components/Modal';
import ModalHeader from '../src/components/ModalHeader';
import ModalBody from '../src/components/ModalBody';
import ModalFooter from '../src/components/ModalFooter';

setAddon(JSXAddon);

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components/Modal', module).addDecorator(StoryWrapper);

story.add(
  'basic',
  wInfo(
    `
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
`,
    { propTables: [Modal, ModalHeader, ModalBody, ModalFooter] }
  )(
    withState({ isOpen: false })(({ store }) => (
      <>
        <Modal
          show={store.state.isOpen}
          onClose={() => store.set({ isOpen: false })}
        >
          <ModalHeader title="Modal" />
          <ModalBody>
            <p>Modal Body</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => store.set({ isOpen: false })}
            >
              Close modal
            </Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={() => store.set({ isOpen: true })}>
          Open modal
        </Button>
      </>
    ))
  )
);
