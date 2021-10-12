import { Story } from '@storybook/react';
import * as React from 'react';
import { Slider, SliderProps } from '.';

export default {
  title: 'Core/Components/Slider',
  component: Slider,
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    stepSize: {
      control: 'number',
    },
  },
};

export const Example: Story<SliderProps> = ({ min, max, stepSize }) => {
  const [values, setValues] = React.useState([10]);

  return <Slider values={values} onChange={setValues} min={min} max={max} stepSize={stepSize} />;
};
Example.args = {
  min: 0,
  max: 100,
  stepSize: 5,
};
