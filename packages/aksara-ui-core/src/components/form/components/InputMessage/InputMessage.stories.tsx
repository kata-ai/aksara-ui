import * as React from 'react';
import { text, select } from '@storybook/addon-knobs';

import InputMessage, { InputMessageVariants } from './InputMessage';
import { messageIconVariants } from '../../../message/variants';

export default {
  title: 'Core/Components/Form/InputMessage',
  component: InputMessage,
};

const messageVariants: Record<string, string> = {};
Object.keys(messageIconVariants).forEach(variant => {
  messageVariants[variant] = variant;
});

export const Example = () => {
  return (
    <InputMessage variant={select<InputMessageVariants>('Variant', messageVariants, 'error')}>
      {text('Text', 'Please enter an email address.')}
    </InputMessage>
  );
};
