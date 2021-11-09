import * as React from 'react';
import { Story } from '@storybook/react';

import Stepper, { Steps } from './Stepper';
import useSteps from '../hooks/useSteps';
import { Box } from '../../../layout';
import { Button } from '../../button/components/Button';
import { Heading } from '../../../typography';

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

export const Example: Story = () => {
  const steps: Steps[] = [
    {
      label: 'Step 1',
      content: <Heading scale={500}>Content 1</Heading>,
    },
    {
      label: 'Step 2',
      content: <Heading scale={500}>Content 2</Heading>,
    },
    {
      label: 'Step 3',
      content: <Heading scale={500}>Content 3</Heading>,
    },
    {
      label: 'Step 4',
      content: <Heading scale={500}>Content 4</Heading>,
    },
  ];

  const stepLabel = steps.map(({ label }) => label);
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Box>
      <Stepper activeStep={activeStep} title="Title" labels={stepLabel}>
        {steps.map(({ content }) => (
          <Box minHeight="20vh" display="flex" justifyContent="center" alignItems="center">
            {content}
          </Box>
        ))}
      </Stepper>
      <Box display="flex" gridGap="md" mt="md">
        <Button disabled={activeStep === 0} onClick={prevStep}>
          Prev
        </Button>
        <Button disabled={activeStep === steps.length - 1} onClick={nextStep}>
          Next
        </Button>
        <Button onClick={reset}>Reset</Button>
      </Box>
    </Box>
  );
};

Example.args = {};
