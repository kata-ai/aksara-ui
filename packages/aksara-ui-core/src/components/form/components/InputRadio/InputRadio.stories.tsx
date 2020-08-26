import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { Box, Text } from '../../../../foundations';
import InputRadioLabel from './InputRadioLabel';
import InputRadio from './InputRadio';

export default {
  title: 'Core/Components/Form/InputRadio',
  component: InputRadio,
};

export const Example = () => {
  return (
    <Box>
      <InputRadioLabel htmlFor="r1">
        <InputRadio id="r1" name="radio" value="r1" disabled={boolean('Disabled', false)} />
        <Text scale={300} ml="xs">
          Radio 1
        </Text>
      </InputRadioLabel>
    </Box>
  );
};
