# Non-Ideal State

> Used to inform users that some contents are unavailable.

This component used to be called "Empty Message", but lately we've realised that we use this component in cases other than empty contents (i.e. error, loading). Therefore, we borrowed the name "Non-Ideal State" from [BlueprintJS](https://blueprintjs.com/docs/#core/components/non-ideal-state):

> There are several types of non-ideal states, including:
>
> - Empty state: a container has just been created and has no data in it yet, or a container's contents have been intentionally removed.
> - Loading state: a container is awaiting data. A good practice is to show a spinner for this state, with optional explanatory text below the spinner.
> - Error state: something went wrong (for instance, 404 and 500 HTTP errors). In this case, a good practice is to add a call to action directing the user what to do next.

## Usage

To use this component in your app, import as follows:

```jsx
import { NonIdealState } from '@wicara/core';

export default function Component() {
  return (
    <NonIdealState
      title="No Project Selected"
      message="You have not selected a project. Please select one from the dropdown on the left."
    />
  );
}
```
