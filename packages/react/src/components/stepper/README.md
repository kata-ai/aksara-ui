# Slider

> Slider element.

## Usage

To use this component in your app, import as follows:

```jsx
import { Stepper, useSteps } from '@aksara-ui/react';

export function Example({ min, max, stepSize }) {
  const steps = [
    {
      label: 'Step 1',
      content: <Box>content 1</Box>,
    },
    {
      label: 'Step 2',
      content: <Box>content 2</Box>,
    },
    {
      label: 'Step 3',
      content: <Box>content 3</Box>,
    },
  ];

  const stepLabel = steps.map(({ label }) => label);

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Stepper activeStep={activeStep} title="Title" labels={stepLabel}>
      {steps.map(({ content }) => content)}
    </Stepper>
  );
}
```
