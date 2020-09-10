import * as React from 'react';
import { Story } from '@storybook/react';

import avatarColors from '../theme';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Core/Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [24, 32, 40],
      },
    },
    name: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(avatarColors),
      },
    },
    src: {
      control: 'text',
    },
  },
};

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Example = Template.bind({});
Example.args = {
  size: 40,
  name: 'Adry Muhammad',
  color: 'indigo',
  src: 'https://picsum.photos/id/2/400/400',
};
