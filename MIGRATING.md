# Migrating to Aksara UI 1.0

Aksara UI introduced a lot of changes compared to the previous version from the previous releases (0.x). To provide a smooth transition process, this documentation is created.

If anything is missing from this document, please [file an issue](https://github.com/kata-ai/aksara-ui/issues/new/choose).

## New package name

The package has been named from `@wicara/core` to `@aksara-ui/react`.

To install it, run the following command:

```sh
# yarn
yarn add @aksara-ui/react

# npm
npm install --save @aksara-ui/react
```

Here's an example of replacing the old imports with the new one.

### From Wicara (0.8)

```diff
- import { Button, InputText } from '@wicara/core';
+ import { Button, InputText } from '@aksara-ui/react';
```

### From Aksara UI canary

```diff
- import { Button, InputText } from '@aksara-ui/core';
+ import { Button, InputText } from '@aksara-ui/react';
```

## Fonts package removed

Aksara UI will no longer provide a fonts package. If you would like to install the brand fonts for Aksara UI, please install them separately.

```bash
# yarn
$ yarn add typeface-inter

# npm
$ npm install --save typeface-inter
```

## Removed deprecated components/utilities

Deprecated components/utilities have been removed in this release. Here are a list of deprecated components/utilities, as well as its replacements, if available:

- `WicaraProvider` -> `AksaraProvider`
- `NonIdealState` -> `Blankslate`
- `Banner` -> `Message`
- All legacy theme tokens (colours, spacing, etc.)
