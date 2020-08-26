import * as React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { IconLock } from '@aksara-ui/icons';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

import { Box } from '../../../../foundations';
import { messageIconVariants } from '../../../message/variants';
import { InputSizes } from '../../types';
import { InputGroup } from '../InputGroup';
import { InputText } from '../InputText';
import { InputAddon } from '.';

export default {
  title: 'Core/Components/Form/InputAddon',
  component: InputAddon,
};

const messageVariants: Record<string, string> = {};
Object.keys(messageIconVariants).forEach(variant => {
  messageVariants[variant] = variant;
});

const inputSizes: SelectTypeOptionsProp<InputSizes> = {
  40: 40,
  48: 48,
};

export const Example = () => {
  return (
    <Box>
      <InputGroup inputSize={select<InputSizes>('Input size', inputSizes, 40)}>
        <InputAddon>
          <IconLock />
        </InputAddon>
        <InputText
          addon
          id="password_dummy"
          name="password_dummy"
          placeholder={text('Placeholder text', 'Type here...')}
          disabled={boolean('Disabled', false)}
          errors={boolean('Has errors', false)}
          size={select<InputSizes>('Input size', inputSizes, 40)}
        />
      </InputGroup>
    </Box>
  );
};
