<p align="center">
  <img alt="Aksara UI" src="assets/aksara-banner.svg" />
</p>

<p align="center">
  <strong>aksara /ak·sa·ra/ noun</strong><br>
  is a system of visual symbol, usually stamped on paper or other media (stone, wood, leaf, and fabric), to express thoughts and ideas.
</p>

<p align="center">
  <a href="https://github.com/kata-ai/aksara-ui/actions?query=workflow%3ACI"><img alt="Build Status" src="https://github.com/kata-ai/aksara-ui/workflows/CI/badge.svg" /></a>
  <a href="https://codecov.io/gh/kata-ai/aksara-ui"><img alt="codecov" src="https://codecov.io/gh/kata-ai/aksara-ui/branch/next/graph/badge.svg" /></a>
  <a href="https://codeclimate.com/github/kata-ai/aksara-ui/maintainability"><img src="https://img.shields.io/codeclimate/maintainability/kata-ai/aksara-ui" /></a>
  <a href="https://lernajs.io/"><img alt="Build Status" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" /></a>
</p>

---

**Aksara** is Kata.ai's design system. It contains foundations, voice and tone guidelines, component standards, and other guidelines that systematically improve quality, timeliness, and consistency to our product.

**Aksara UI** is an implementation of Aksara using the React framework. It is the true implementation of Aksara in raw code form, designed to communicate with users and bring delightful experiences. Aksara UI is the designation for Aksara React components.

---

## Contributing

Aksara UI is developed by the help of developers like you! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started on developing Aksara UI.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Usage

### Quickstart

Check out [kata-ai/wicara-starter](https://github.com/kata-ai/wicara-starter).

### Prerequisites

Aksara UI requires `styled-components` v4+. First, install the core Aksara UI package, Aksara UI React icon library, and `styled-components`.

```bash
# yarn
$ yarn add styled-components @aksara-ui/core @aksara-ui/icons

# npm
$ npm install --save styled-components @aksara-ui/core @aksara-ui/icons
```

Then, you will need to apply the style resets + theme provider. Wrap your app inside the `AksaraProvider` to use the resets and `ThemeProvider` component provided by Aksara UI.

```jsx
import { AksaraProvider } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return <AksaraProvider>{children}</AksaraProvider>;
}
```

Once you've applied the style resets, you can use Aksara UI components in your app. See the example below.

### Example

Aksara UI is built in React, with styling done in styled-components. To use these components, import them as follows:

```jsx
// Example for `<Button />` component.

import * as React from 'react';
import { Button } from '@aksara-ui/core';

export default function Component() {
  return <Button>Push Me</Button>;
}
```

Read the [Storybook](https://wicara.now.sh/) for more examples.

## Fonts

We use two fonts in the Aksara Design Language: `Museo Sans`, and `Museo Sans Rounded`.

```sh
# yarn
$ yarn add @aksara-ui/fonts
# npm
$ npm i @aksara-ui/fonts
```

Note that these fonts are **not provided for free**. You should check if you have a license to use these fonts before installing this package.

### Usage

#### Body fonts

To use these fonts within your app, import as follows:

```jsx
// Museo Sans
import '@aksara-ui/fonts/museo-sans.css';
// Museo Sans Rounded
import '@aksara-ui/fonts/museo-sans-rounded.css';
```

#### Icon fonts

We also provided some icon sets. To use them, import as follows:

```jsx
import '@aksara-ui/fonts/kata-icons.css';
```

## License

This is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md), which means different packages can have different licenses.

By default, the root level of this repo, as well as the demo site, are licensed under the [Apache 2.0 license](LICENSE). While most components use the same license, please note that some packages (like our assets package) may use a different license. Any overriding licenses for each package will be mentioned in the `LICENSE` file located at the root of each package.

Copyright (c) 2018 Kata.ai and/or contributors. All rights reserved.

## Maintainers

- Resi Respati ([@resir014](https://twitter.com/resir014)) – [Kata.ai](https://kata.ai)
