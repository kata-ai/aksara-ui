import * as React from 'react';

import { Box } from '../../../../layout';
import { FormLabel } from '../FormLabel';
import InputText from './InputText';

export default {
  title: 'Core/Components/Form/InputText',
  component: InputText,
};

export const Example = () => {
  return (
    <Box>
      <FormLabel htmlFor="textDummy">Text input</FormLabel>
      <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
    </Box>
  );
};
