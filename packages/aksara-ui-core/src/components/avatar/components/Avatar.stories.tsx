import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import avatarColors from '../theme';
import { AvatarBaseProps } from '../styles';
import Avatar from './Avatar';

export default {
  title: 'Core/Components/Avatar',
  component: Avatar,
};

const sizeOptions: Record<number, AvatarBaseProps['size']> = {
  24: 24,
  32: 32,
  40: 40,
};
const defaultSizeValue = 40;

const colorOptions: Record<string, string> = {};
Object.keys(avatarColors).forEach(variant => {
  colorOptions[variant] = variant;
});
const defaultColorValue = 'indigo';

export const Example = () => (
  <Avatar
    shape="rounded"
    size={select<AvatarBaseProps['size']>('Size', sizeOptions, defaultSizeValue)}
    name={text('Name', 'Adry Muhammad')}
    color={select<keyof typeof avatarColors>('Color', colorOptions, defaultColorValue)}
    src={text('Image Source', 'https://picsum.photos/id/2/400/400')}
  />
);
