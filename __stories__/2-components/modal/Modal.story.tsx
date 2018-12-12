import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';
import WithState from '@storybook-utils/components/WithState';

import Button from '@kata-kit/button/src/components/Button';

import Modal from '@kata-kit/modal/src/components/Modal';
import ModalHeader from '@kata-kit/modal/src/components/ModalHeader';
import ModalBody from '@kata-kit/modal/src/components/ModalBody';
import ModalFooter from '@kata-kit/modal/src/components/ModalFooter';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const infoText = `
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
`;

const story: any = storiesOf('Components|Modal', module)
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
    info: {
      text: infoText
    }
  }
);

story.add(
  'Example',
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
    info: {
      disable: true
    }
  }
);
