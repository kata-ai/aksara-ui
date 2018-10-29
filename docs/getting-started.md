# Getting Started

## Prerequisites

At the bare minimum, you should at least import the global CSS reset provided by Wicara.

```js
import '@kata-kit/reset';
```

## Example

Wicara is built in React, with styling done in styled-components. To use these components, import them as follows:

```jsx
// Example for `<Button />` component.

import * as React from 'react';
import { Button } from '@kata-kit/button';

export default () => <Button>Push Me</Button>;
```
