import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';
import { select, text } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

import { SystemWrapper } from '../../../../utils/storybook';
import { IconButtonSizes, IconButtonVariants } from './styles';
import IconButtonAnchor from './IconButtonAnchor';

const buttonVariants: SelectTypeOptionsProp<IconButtonVariants> = {
  default: 'default',
  outline: 'outline',
  destructive: 'destructive',
  ghost: 'ghost',
};
const buttonSizes: SelectTypeOptionsProp<IconButtonSizes> = { 24: 24, 32: 32, 40: 40 };

export default {
  title: 'Core|Components/Button/IconButtonAnchor',
  component: IconButtonAnchor,
  decorators: [SystemWrapper],
};

export const Example = () => (
  <IconButtonAnchor
    aria-label="Push Me"
    variant={select<IconButtonVariants>('Variant', buttonVariants, 'outline')}
    size={select<IconButtonSizes>('Color', buttonSizes, 32)}
    href={text('URL', 'https://www.youtube.com/watch?v=fdixQDPA2h0')}
    target="_blank"
    rel="noopener noreferrer"
    onClick={action('button-click')}
  >
    <IconPen fill="currentColor" aria-hidden="true" />
  </IconButtonAnchor>
);
