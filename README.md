<p align="center">
  <img alt="Wicara" src="assets/wicara-banner.png" />
</p>

<p align="center">
  <strong>wicara /wi·ca·ra/ (noun)</strong><br>
  the expression of or the ability to express thoughts and feelings by articulate sounds.
</p>

<p align="center">
  <a href="https://travis-ci.org/kata-ai/wicara"><img alt="Build Status" src="https://img.shields.io/travis/kata-ai/wicara/next.svg" /></a>
  <a href="https://codecov.io/gh/kata-ai/wicara"><img alt="codecov" src="https://codecov.io/gh/kata-ai/wicara/branch/next/graph/badge.svg" /></a>
  <a href="https://lernajs.io/"><img alt="Build Status" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" /></a>
</p>

---

**Wicara** is an implementation of Aksara using the React framework. It is the true implementation of Aksara in raw code form, designed to communicate with users and bring delightful experiences. Wicara is the designation for Aksara React components.

**Note: Migrating from v0.7 to v0.8? Please read the [migration guide](MIGRATING.md).**

---

## Contributing

Wicara is developed by the help of developers like you! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started on developing Wicara.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Usage

### Quickstart

Check out [kata-ai/wicara-starter](https://github.com/kata-ai/wicara-starter).

### Prerequisites

Wicara requires `styled-components` v4+. First, install the core Wicara package, Wicara React icon library, and `styled-components`.

```bash
# yarn
$ yarn add styled-components @wicara/core @aksara-ui/icons-react

# npm
$ npm install --save styled-components @wicara/core @aksara-ui/icons-react
```

Then, you will need to apply the style resets + theme provider. Wrap your app inside the `WicaraProvider` to use the resets and `ThemeProvider` component provided by Wicara.

```jsx
import { WicaraProvider } from '@wicara/core';

export default function MyApp({ children }) {
  return <WicaraProvider>{children}</WicaraProvider>;
}
```

Once you've applied the style resets, you can use Wicara components in your app. See the example below.

### Example

Wicara is built in React, with styling done in styled-components. To use these components, import them as follows:

```jsx
// Example for `<Button />` component.

import * as React from 'react';
import { Button } from '@wicara/core';

export default function Component() {
  return <Button>Push Me</Button>;
}
```

Read the [Storybook](https://wicara.now.sh/) for more examples.

## Fonts

We use two fonts in the Aksara Design Language: `Museo Sans`, and `Museo Sans Rounded`.

```sh
# yarn
$ yarn add @wicara/fonts
# npm
$ npm i @wicara/fonts
```

Note that these fonts are **not provided for free**. You should check if you have a license to use these fonts before installing this package.

### Usage

#### Body fonts

To use these fonts within your app, import as follows:

```jsx
// Museo Sans
import '@wicara/fonts/museo-sans.css';
// Museo Sans Rounded
import '@wicara/fonts/museo-sans-rounded.css';
```

#### Icon fonts

We also provided some icon sets. To use them, import as follows:

```jsx
import '@wicara/fonts/kata-icons.css';
```

## License

This is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md), which means different packages can have different licenses.

By default, the root level of this repo, as well as the demo site, are licensed under the [Apache 2.0 license](LICENSE). While most components use the same license, please note that some packages (like our assets package) may use a different license. Any overriding licenses for each package will be mentioned in the `LICENSE` file located at the root of each package.

Copyright (c) 2018 Kata.ai and/or contributors. All rights reserved.

## Maintainers

- Resi Respati ([@resir014](https://twitter.com/resir014)) – [Kata.ai](https://kata.ai)
- Dio Syahrizal ([@DioSyahrizal](https://github.com/DioSyahrizal)) – [Kata.ai](https://kata.ai)
