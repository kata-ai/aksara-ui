# Migrating to Wicara 0.8

Wicara 0.8 introduced a lot of changes compared to the previous version, 0.7. To provide a smooth transition process, this documentation is created.

## One single core component

The architecture of Wicara 0.7 is based off of single npm packages per component. We quickly realised that [this was a bad idea](https://segment.com/blog/driving-adoption-of-a-design-system/#too-early-for-a-mono-repo), so we decided to merge them all into a single package, `@wicara/core`.

To install it, run the following command:

```sh
# yarn
yarn add @wicara/core

# npm
npm install --save @wicara/core
```

Here's an example of replacing the old imports with the new one.

```diff
- import { Button } from '@kata-kit/button';
- import { TextInput } from '@kata-kit/form';
+ import { Button, TextInput } from '@wicara/core';
```

Aside from that, all packages with the `@kata-kit/` scope have been deprecated, and will no longer be updated. Please migrate to the `@wicara/` scope.

## New fonts package

The font stack is still provided on a separate package from the core, and has been renamed to `@wicara/fonts`.

## Removed components

The following components have been removed because we deemed to be too high-level:

- `dashboard`
- `layout`

The following components have been replaced by another component:

- `button/SupportButton` -> `<Button size="sm" variant="support" />`
- `common/Board` -> use the new `Card` instead

The following components have been removed until a replacement has been found:

- `dropdown`
- `split-button`

If you would like to still use any of these packages, please copy and paste the codebase from the primary package to your app.

## Renamed components

- `EmptyMessage` -> `NonIdealState`
- `modal` -> `dialog`
- `drawer` -> `side-sheet`

## Dialog & Side Sheet's internal components removed

All projects using the `Dialog` and `SideSheet` components should construct the inner components with foundational components. See [this Storybook](https://wicara.now.sh/?path=/story/core-components-dialog--default) for example.

You can also create a reusable component for them inside your app.

## Theme Provider

`KataReset` has been replaced by `WicaraProvider`. If you still rely on old Wicara components, you can still use them side-by-side and there shouldn't be any problems.

Read the [README](README.md) for more information.
