# @kata-kit/pagination

> Pagination component for kata-kit.

## Install

```sh
# yarn
yarn add @kata-kit/loading
# npm
npm install @kata-kit/loading
```

## Usage

To use this component within your React app, import as follows:

```javascript
import { Pagination } from '@kata-kit/pagination';

const Component = () => (
  <Pagination
    current={3}
    total={50}
    onSelect={select => console.log('selected', select)}
  />
);
```
