# @kata-kit/dashboard

> Dashboard component for kata-kit.

## Install

```sh
# yarn
yarn add @kata-kit/dashboard
# npm
npm install @kata-kit/dashboard
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { Dashboard } from '@kata-kit/dashboard';

const Component = () => (
  <Dashboard
    isStarter
    title="kata-kit Demo"
    headerContent={
      <p>
        This project is intended to test the look and feel of the kata-kit
        component, as well as a development environment.
      </p>
    }
  >
    ...
  </Dashboard>
);
```
