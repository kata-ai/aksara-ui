import { IconUser } from '@aksara-ui/icons';
import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Heading } from '../../../typography';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Core/Components/Avatar',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    name: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    notificationBadge: {
      control: 'text',
    },
  },
};

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const WithInitialName = Template.bind({});
WithInitialName.args = {
  size: 'lg',
  name: 'Adry Muhammad',
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 'lg',
  name: 'Adry Muhammad',
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
  src: 'https://picsum.photos/id/2/400/400',
};

export const WithPresence: Story<AvatarProps> = ({ name, ...args }) => {
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar name={name} presence={<Box width="100%" height="100%" backgroundColor={'red07'} />} {...args} />
    </Box>
  );
};
WithPresence.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  src: 'https://picsum.photos/id/2/400/400',
};

export const WithNotificationBadge: Story<AvatarProps> = ({ name, notificationBadge, ...args }) => {
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar name={name} notificationBadge={notificationBadge} {...args} />
    </Box>
  );
};
WithNotificationBadge.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  src: 'https://picsum.photos/id/2/400/400',
  notificationBadge: '99',
};
