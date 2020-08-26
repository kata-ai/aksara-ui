import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { SystemWrapper } from '../../../../utils/storybook';
import { Box } from '../../../../foundations';
import { FormLabel } from '../FormLabel';
import InputText from './InputText';

export default {
  title: 'Core|Components/Form/InputText',
  component: InputText,
  decorators: [SystemWrapper],
};

export const Example = () => {
  return (
    <Box>
      <FormLabel htmlFor="textDummy">{text('Label text', 'Text input')}</FormLabel>
      <InputText
        id="textDummy"
        name="textDummy"
        placeholder={text('Placeholder text', 'Type here...')}
        disabled={boolean('Disabled', false)}
        errors={boolean('Has errors', false)}
      />
    </Box>
  );
};
