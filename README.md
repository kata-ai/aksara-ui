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
  <a href="https://sonarcloud.io/dashboard?id=kata-ai_aksara-ui"><img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=kata-ai_aksara-ui&metric=alert_status" /></a>
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

### Prerequisites

Aksara UI requires `styled-components` v4+. First, install the core Aksara UI package, Aksara UI React icon library, and `styled-components`.

```bash
# yarn
$ yarn add styled-components @aksara-ui/react @aksara-ui/icons

# npm
$ npm install --save styled-components @aksara-ui/react @aksara-ui/icons
```

Then, you will need to apply the theme provider as well as the default global styles. Wrap your app inside the `AksaraProvider` to do so.

```jsx
import { AksaraProvider } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return <AksaraProvider>{children}</AksaraProvider>;
}
```

If you would like to use additional styles for `AksaraProvider`, add the `disableInjection` prop to `AksaraProvider` and add your custom styles as follows.

```jsx
import { css } from 'styled-components';
import { AksaraProvider, injectGlobalStyles } from '@aksara-ui/react';

const styles = css`
  [data-reach-tooltip] {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    padding: 0.25em 0.5em;
    box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.1);
    white-space: nowrap;
    font-size: 85%;
    background: #f0f0f0;
    color: #444;
    border: solid 1px #ccc;
  }
`;

const { GlobalStyles } = injectGlobalStyles(styles);

export default function MyApp({ children }) {
  return (
    <AksaraProvider disableInjection>
      <GlobalStyles />
      {children}
    </AksaraProvider>
  );
}
```

Once you've applied the provider, you can use Aksara UI components in your app. See the example below.

### Example

Aksara UI is built in React, with styling done in styled-components. To use these components, import them as follows:

```jsx
// Example for `<Button />` component.

import * as React from 'react';
import { Button } from '@aksara-ui/react';

export default function Component() {
  return <Button>Push Me</Button>;
}
```

Read the [Storybook](https://aksara-ui.now.sh/) for more examples.

## Fonts

We use multiple fonts in Aksara UI:

- The system font stack, for all UI elements within the platform.
- The [**Inter**](https://rsms.me/inter/) font as our primary brand typeface.

### Using brand fonts

First, you should install the brand fonts into your project.

```bash
# yarn
$ yarn add typeface-inter

# npm
$ npm install --save typeface-inter
```

Then, in any typography component (e.g. `Text`, `Heading`), you can use the `brand` token in `fontFamily`.

```jsx
import * as React from 'react';
import { Heading } from '@aksara-ui/react';

export default function Component() {
  return (
    <Heading scale={700} fontFamily="brand">
      Heading Text
    </Heading>
  );
}
```

## License

All packages in this repoare released under the [Apache 2.0 license](LICENSE). Please note that some packages (like our fonts package) may contain third-party materials with different licences. Any third-party acknowledgements are outlined on the "Credits" section on each package's README.

Copyright (c) 2018 Kata.ai and/or contributors. All rights reserved.

## Maintainers

- Resi Respati ([@resir014](https://twitter.com/resir014)) – [Kata.ai](https://kata.ai)
