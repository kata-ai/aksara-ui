import { IconUser } from '@aksara-ui/icons';
import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Heading } from '../../../typography';
import Avatar, { AvatarProps } from './Avatar';
import { PresenceProps } from './Presence';

export default {
  title: 'Core/Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
    },
    name: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    presencePosition: {
      options: ['top', 'bottom'],
      control: { type: 'radio' },
    },
    presenceLabel: {
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

interface AvatarWithPresenceProps extends AvatarProps {
  presencePosition: 'top' | 'bottom';
  presenceLabel: string;
}

export const WithPresence: Story<AvatarWithPresenceProps> = ({ name, presence, ...args }) => {
  const presenceOption: PresenceProps = presence
    ? {
        ...presence,
        position: args.presencePosition,
        label: args.presenceLabel,
      }
    : {
        position: args.presencePosition,
        label: args.presenceLabel,
      };
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar name={name} presence={{ ...presenceOption }} {...args} />
    </Box>
  );
};
WithPresence.args = {
  size: 'lg',
  name: 'Adry Muhammad',
  bg: 'indigo06',
  src: 'https://picsum.photos/id/2/400/400',
  presencePosition: 'top',
  presenceLabel: '3',
};
