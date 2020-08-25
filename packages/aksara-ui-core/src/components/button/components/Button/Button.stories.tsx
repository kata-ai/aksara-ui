import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';
import { select, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

import { SystemWrapper } from '../../../../utils/storybook';
import { ButtonVariants, ButtonSizes, ButtonIconPositions } from './types';
import Button from './Button';

const buttonVariants: SelectTypeOptionsProp<ButtonVariants> = {
  default: 'default',
  outline: 'outline',
  destructive: 'destructive',
  ghost: 'ghost',
};
const buttonSizes: SelectTypeOptionsProp<ButtonSizes> = { 32: 32, 40: 40, 48: 48 };
const buttonIconPositions: SelectTypeOptionsProp<ButtonIconPositions> = {
  left: 'left',
  right: 'right',
};

export default {
  title: 'Core|Components/Button/Button',
  component: Button,
  decorators: [SystemWrapper],
};

export const Example = () => (
  <Button
    type="button"
    variant={select<ButtonVariants>('Variant', buttonVariants, 'primary')}
    size={select<ButtonSizes>('Color', buttonSizes, 40)}
    block={boolean('Block', false)}
    disabled={boolean('Disabled', false)}
    isLoading={boolean('Is Loading', false)}
    onClick={action('button-click')}
  >
    Primary
  </Button>
);

export const WithIcon = () => (
  <Button
    type="button"
    variant={select<ButtonVariants>('Variant', buttonVariants, 'primary')}
    size={select<ButtonSizes>('Size', buttonSizes, 40)}
    block={boolean('Block', false)}
    disabled={boolean('Disabled', false)}
    isLoading={boolean('Is Loading', false)}
    icon={IconPen}
    iconPosition={select<ButtonIconPositions>('Icon Position', buttonIconPositions, 'left')}
    onClick={action('button-click')}
  >
    Primary
  </Button>
);
