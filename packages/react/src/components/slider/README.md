# Slider

> Slider element.

## Usage

To use this component in your app, import as follows:

```jsx
import { Slider } from '@aksara-ui/react';

export function Example({ min, max, stepSize }) {
  const [values, setValues] = React.useState([10]);

  return <Slider values={values} onChange={setValues} min={min} max={max} stepSize={stepSize} />;
}
```
