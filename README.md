# kata-kit

[![build Status)](https://img.shields.io/travis/kata-ai/kata-kit.svg)](https://travis-ci.org/kata-ai/kata-kit) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> The component library powering the Kata.ai platform.

`kata-kit` is the React implementation of the Kata Design System (KDS). Developing apps according to KDS is now easy thanks to this library of modular, reusable components.

**Note: kata-kit v0.5.0 is still in beta. The latest stable version is [here](https://github.com/kata-ai/kata-kit/tree/v0.2.4).**

## Contributing

kata-kit is developed by the help of developers like you! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started on developing kata-kit.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Usage

### Prerequisites

At the bare minimum, you should at least import the global CSS reset provided by `kata-kit`.

```js
import '@kata-kit/reset';
```

### Example

`kata-kit` is built in React, with styling done in styled-components. To use these components, import them as follows:

```jsx
// Example for `<Button />` component.

import * as React from 'react';
import { Button } from '@kata-kit/button';

export default () => <Button>Push Me</Button>;
```

## License

This is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md), which means different packages can have different licenses.

By default, the root level of this repo, as well as the demo site, are licensed under the [Apache 2.0 license](LICENSE). While most components use the same license, please note that some packages (like our assets package) may use a different license. Any overriding licenses for each package will be mentioned in the `LICENSE` file located at the root of each package.

Copyright (c) 2018 Kata.ai and/or contributors. All rights reserved.

## Maintainers

- Resi Respati ([@resir014](https://twitter.com/resir014)) – [Kata.ai](https://kata.ai)
- Reyhan Sofian Haqqi – [Kata.ai](https://kata.ai)
