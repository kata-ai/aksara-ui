# @kata-kit/drawer

> Drawer component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/drawer
# npm
npm install @kata-kit/drawer
```

## Usage

To use this component within your React app, import as follows:

```jsx
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter
} from '@kata-kit/drawer';

const Component = () => (
  <Drawer isOpen={this.stateisOpen} onClose={() => this.setState({ isOpen: false })}>
    <DrawerHeader title="Drawer" />
    <DrawerBody>
      <p>Drawer Body</p>
    </DrawerBody>
    <DrawerFooter>
      Drawer Footer
    </DrawerFooter>
  </Drawer>
  <button type="button" onClick={() => this.setState({ isOpen: true })}>
    Open drawer
  </button>
);
```
