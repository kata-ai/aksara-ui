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

export const Example: Story<SliderProps> = ({ values, min, max, stepSize }) => {
  const [sliderValues, setSliderValues] = React.useState(values);

  return <Slider values={sliderValues} onChange={setSliderValues} min={min} max={max} stepSize={stepSize} />;
};
Example.args = {
  values: [10],
  min: 0,
  max: 100,
  stepSize: 5,
};
