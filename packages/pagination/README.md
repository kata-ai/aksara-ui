# @kata-kit/pagination

> Pagination component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/pagination
# npm
npm install @kata-kit/pagination
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { Pagination } from '@kata-kit/pagination';

const Component = () => (
  <Pagination
    current={3}
    total={50}
    onSelect={select => console.log('selected', select)}
  />
);
```
