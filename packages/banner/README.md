# @wicara/banner

> Banner component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/banner
# npm
npm install @kata-kit/banner
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { Banner } from '@kata-kit/banner';

const Component = () => (
  <Banner state="success" message="An alert! - You've succesfully read it." />
);
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                                          | Required | Default     |
| --------- | --------------------------------------------- | -------- | ----------- |
| color     | `'error'`, `'success'`, `'warning'`, `'info'` | **Yes**  | -           |
| message   | `any`                                         | **Yes**  | -           |
| className | `string`                                      | -        | `undefined` |
| onClose   | `(e: any) => void`                            | -        | `undefined` |
