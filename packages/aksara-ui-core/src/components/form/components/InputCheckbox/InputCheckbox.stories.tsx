import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { SystemWrapper } from '../../../../utils/storybook';
import { Box, Text } from '../../../../foundations';
import InputCheckboxLabel from './InputCheckboxLabel';
import InputCheckbox from './InputCheckbox';

export default {
  title: 'Core|Components/Form/InputCheckbox',
  component: InputCheckbox,
  decorators: [SystemWrapper],
};

export const Example = () => {
  return (
    <Box>
      <InputCheckboxLabel htmlFor="r1">
        <InputCheckbox id="r1" name="checkbox" value="r1" disabled={boolean('Disabled', false)} />
        <Text scale={300} ml="xs">
          Checkbox
        </Text>
      </InputCheckboxLabel>
    </Box>
  );
};
