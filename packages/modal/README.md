# @kata-kit/modal

> Modal component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/modal
# npm
npm install @kata-kit/modal
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@kata-kit/modal';

const Component = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader title="Modal" />

      <ModalBody>...</ModalBody>

      <ModalFooter>...</ModalFooter>
    </Modal>
  );
};
```
