# @kata-kit/dropdown

> Dropdown component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/dropdown
# npm
npm install @kata-kit/dropdown
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { DropdownSelector, DropdownItem } from '@kata-kit/dropdown';

const Component = ({ onSelect, value }) => (
  <DropdownSelector onSelect={onSelect} value={value}>
    <DropdownItem>Hehe</DropdownItem>
    <DropdownItem>Hoho</DropdownItem>
  </DropdownSelector>
);
```
