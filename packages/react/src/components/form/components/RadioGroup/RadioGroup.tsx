import React from 'react';
import styled from 'styled-components';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Box } from '../../../../layout';
import { RadioGroupLabel } from '.';

const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
  display: none;
  background-color: white;
  width: 25;
  height: 25;
  border-radius: 100%;
`;

// Exports
const RadioGroup = RadioGroupPrimitive.Root;
const RadioGroupRadio = StyledRadio;

export const CheckboxDemo = () => (
  <form>
    <RadioGroup defaultValue="default" aria-label="View density">
      <Box sx={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="default" id="r1"></RadioGroupRadio>
        <RadioGroupLabel htmlFor="r1">Default</RadioGroupLabel>
      </Box>
      <Box sx={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="comfortable" id="r2"></RadioGroupRadio>
        <RadioGroupLabel htmlFor="r2">Comfortable</RadioGroupLabel>
      </Box>
      <Box sx={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="compact" id="r3"></RadioGroupRadio>
        <RadioGroupLabel htmlFor="r3">Compact</RadioGroupLabel>
      </Box>
    </RadioGroup>
  </form>
);

export default CheckboxDemo;
