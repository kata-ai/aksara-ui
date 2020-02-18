# Pagination

> Pagination indicates a series of content that exists across pages.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Pagination } from '@wicara/core';

export default function Component() {
  return <Pagination current={3} total={50} onSelect={select => console.log('selected', select)} />;
}
```

See more usage in the _JSX_ panel.

## Props

| Property  | Type                     | Required | Default   | Description                                                                                                           |
| --------- | ------------------------ | -------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| className | `string`                 | -        | undefined | Additional CSS classes to give to the component                                                                       |
| style     | `CSSProperties`          | -        | undefined | Additional CSS properties to give to the component                                                                    |
| current   | `number`                 | **Yes**  | -         | The current page number.                                                                                              |
| total     | `number`                 | **Yes**  | -         | Total number of pages.                                                                                                |
| onChange  | `(page: number) => void` | -        | undefined | Callback to run when a page number is selected. You can use this to e.g. run setState on your component's page state. |
