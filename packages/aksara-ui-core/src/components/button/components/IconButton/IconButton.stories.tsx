import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';
import { select } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

import { SystemWrapper } from '../../../../utils/storybook';
import { IconButtonSizes, IconButtonVariants } from './styles';
import IconButton from './IconButton';

const buttonVariants: SelectTypeOptionsProp<IconButtonVariants> = {
  default: 'default',
  outline: 'outline',
  destructive: 'destructive',
  ghost: 'ghost',
};
const buttonSizes: SelectTypeOptionsProp<IconButtonSizes> = { 24: 24, 32: 32, 40: 40 };

export default {
  title: 'Core|Components/Button/IconButton',
  component: IconButton,
  decorators: [SystemWrapper],
};

export const Example = () => (
  <IconButton
    type="button"
    aria-label="Push Me"
    variant={select<IconButtonVariants>('Variant', buttonVariants, 'outline')}
    size={select<IconButtonSizes>('Size', buttonSizes, 32)}
    onClick={action('button-click')}
  >
    <IconPen fill="currentColor" aria-hidden="true" />
  </IconButton>
);
