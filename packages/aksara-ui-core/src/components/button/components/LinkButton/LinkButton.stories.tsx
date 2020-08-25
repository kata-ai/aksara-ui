import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

import { SystemWrapper } from '../../../../utils/storybook';
import { LinkButtonSizes, LinkButtonVariants } from './styles';
import LinkButton from './LinkButton';

const buttonVariants: SelectTypeOptionsProp<LinkButtonVariants> = {
  primary: 'primary',
  destructive: 'destructive',
  inverse: 'inverse',
};
const buttonSizes: SelectTypeOptionsProp<LinkButtonSizes> = { 32: 32, 40: 40 };

export default {
  title: 'Core|Components/Button/LinkButton',
  component: LinkButton,
  decorators: [SystemWrapper],
};

export const Example = () => (
  <LinkButton
    type="button"
    variant={select<LinkButtonVariants>('Variant', buttonVariants, 'primary')}
    size={select<LinkButtonSizes>('Size', buttonSizes, 32)}
    isLoading={boolean('Is Loading', false)}
    onClick={action('button-click')}
  >
    Push Me
  </LinkButton>
);
