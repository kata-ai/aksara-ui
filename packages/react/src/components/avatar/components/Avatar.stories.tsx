import { IconUser } from '@aksara-ui/icons';
import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Heading } from '../../../typography';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Core/Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
    },
    name: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
  },
};

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const WithInitialName = Template.bind({});
WithInitialName.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  bg: 'indigo06',
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  bg: 'indigo06',
  src: 'https://picsum.photos/id/2/400/400',
};

export const WithIcons: Story<AvatarProps> = args => <Avatar icon={IconUser} {...args} />;
WithIcons.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  color: 'greymed04',
  bg: 'greylight03',
};

export const WithLabel: Story<AvatarProps> = ({ name, ...args }) => (
  <Box display="inline-flex" alignItems="center">
    <Avatar name={name} {...args} />
    <Heading as="span" ml="xs" scale={300}>
      {name}
    </Heading>
  </Box>
);
WithLabel.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  bg: 'indigo06',
  src: 'https://picsum.photos/id/2/400/400',
};
