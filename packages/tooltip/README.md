# @kata-kit/dashboard

> Tooltip component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/tooltip
# npm
npm install @kata-kit/tooltip
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { TooltipTarget, Tooltip } from '@kata-kit/tooltip';

const Component = () => (
  <TooltipTarget component={<Tooltip>Hello! This is a tooltip.</Tooltip>}>
    <span>Hover over me!</span>
  </TooltipTarget>
);
```
