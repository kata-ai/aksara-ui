# @wicara/badge

> Badge component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/badge
# npm
npm install @kata-kit/badge
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { Badge } from '@kata-kit/badge';

const Component = () => <Badge color="default" message="text" />;
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                                                             | Required | Default     |
| --------- | ---------------------------------------------------------------- | -------- | ----------- |
| color     | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -        | -           |
| className | `string`                                                         | -        | `undefined` |
| style     | `React.CSSProperties`                                            | -        | `undefined` |
