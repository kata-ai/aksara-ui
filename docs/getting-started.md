# Getting Started

## Prerequisites

Wicara requires `styled-components` v4+. First, install the core Wicara theme/reset package and `styled-components`.

```bash
# yarn
$ yarn add styled-components @kata-kit/theme @kata-kit/reset

# npm
$ npm install --save styled-components @kata-kit/theme @kata-kit/reset
```

At the bare minimum, you should at least import the global CSS reset provided by Wicara.

```jsx
import { KataReset } from '@kata-kit/reset';

const App = ({ children }) => <KataReset>{children}</KataReset>;
```

## Example

Wicara is built in React, with styling done in styled-components. To use these components, import them as follows:

```jsx
// Example for `<Button />` component.

import * as React from 'react';
import { Button } from '@kata-kit/button';

export default () => <Button>Push Me</Button>;
```
