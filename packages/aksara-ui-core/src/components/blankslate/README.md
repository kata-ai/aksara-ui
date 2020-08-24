# Blankslate

> Used to provide additional information when no dynamic content exists.

A Blankslate is used to represent contents that are unavailable, or "non-ideal states". The [BlueprintJS](https://blueprintjs.com/docs/#core/components/non-ideal-state) documentation explains the kinds of non-ideal states that can be handled by a Blankslate component:

> There are several types of non-ideal states, including:
>
> - Empty state: a container has just been created and has no data in it yet, or a container's contents have been intentionally removed.
> - Loading state: a container is awaiting data. A good practice is to show a spinner for this state, with optional explanatory text below the spinner.
> - Error state: something went wrong (for instance, 404 and 500 HTTP errors). In this case, a good practice is to add a call to action directing the user what to do next.

## Usage

To use this component in your app, import as follows:

```jsx
import { Blankslate } from '@aksara-ui/core';

export default function Component() {
  return (
    <Blankslate
      title="No Project Selected"
      content="You have not selected a project. Please select one from the dropdown on the left."
    />
  );
}
```
