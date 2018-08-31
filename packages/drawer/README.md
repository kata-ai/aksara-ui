# @kata-kit/drawer

> Drawer component for kata-kit.

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
  <Drawer isOpen={open} onClose={() => this.toggleDrawer()}>
    <DrawerHeader title="Drawer" />

    <DrawerBody>...</DrawerBody>

    <DrawerFooter>...</DrawerFooter>
  </Drawer>
);
```
