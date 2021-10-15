import * as React from 'react';
import { Story } from '@storybook/react';

import Stepper from './Stepper';
import useSteps from '../hooks/useSteps';
import { Box } from '../../../layout/box';
import { Button } from '../../button/components/Button';

export default {
  title: 'Core/Components/Stepper',
  component: Stepper,
  argTypes: {
    style: {
      control: null,
    },
    className: {
      control: null,
    },
  },
};

export const Example: Story<any> = () => {
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
    {
      label: 'Step 4',
      content: <Box>content 4</Box>,
    },
  ];

  const stepLabel = steps.map(({ label }) => label);
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <>
      <Stepper activeStep={activeStep} title="Title" labels={stepLabel}>
        {steps.map(({ content }) => content)}
      </Stepper>
      <Box display="grid" gridGap="md" gridTemplateColumns="repeat(3, 1fr)">
        <Button disabled={activeStep === 0} onClick={prevStep}>
          Prev
        </Button>
        <Button disabled={activeStep === steps.length - 1} onClick={nextStep}>
          Next
        </Button>
        <Button onClick={reset}>Reset</Button>
      </Box>
    </>
  );
};

Example.args = {};
