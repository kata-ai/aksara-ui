# Action List

> A list of actions or selectable options.

## Usage

To use this component within your React app, import as follows:

```jsx
import { ActionList, ActionListItem } from '@aksara-ui/react';

const Component = () => (
  <ActionList width="200px">
    <ActionListItem marginX="sm" isActive>
      item sample 1
    </ActionListItem>
    <ActionListItem marginX="sm">item sample 2</ActionListItem>
    <ActionListItem marginX="sm">item sample 3</ActionListItem>
  </ActionList>
);
```

See more usage in the _JSX_ panel

## Props ActionList

`ActionListProps` is extended from `StackProps`

## Props ActionListItem

| Property       | Type                  | Required | Default     |
| -------------- | --------------------- | -------- | ----------- |
| variant        | `default,destructive` | -        | `'default'` |
| size           | `string`              | -        | `'md'`      |
| className      | `string`              | -        | `undefined` |
| style          | `React.CSSProperties` | -        | `undefined` |
| containerStyle | `CSSObject`           | -        | `undefined` |
| contentStyle   | `CSSObject`           | -        | `undefined` |
