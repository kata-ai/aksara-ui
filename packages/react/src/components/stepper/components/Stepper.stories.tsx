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
  const steps = new Array(3).fill(null).map((data, index) => {
    return {
      label: `Step ${index + 1}`,
      content: ({ activeStep }) => <Box>content {activeStep + 1}</Box>,
    };
  });
  const stepLabel = steps.map(({ label }) => label);
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <>
      <Stepper activeStep={activeStep} title="Title" labels={stepLabel}>
        {steps.map(({ content }) => content({ activeStep }))}
      </Stepper>
      <Box>
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
