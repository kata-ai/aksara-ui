import * as React from 'react';
import { IconWhatsapp } from '@aksara-ui/icons';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../../layout';
import Tag, { TagProps } from './Tag';

export default {
  title: 'Core/Components/Tag',
  component: Tag,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const defaultArgs: TagProps = {
  disabled: false,
  children: 'Keyword',
};

const Template: Story<TagProps> = ({ hasCloseIcon, onClick, disabled, children }) => (
  <Box display="flex">
    <Tag hasCloseIcon={hasCloseIcon} onClick={onClick} disabled={disabled}>
      {children}
    </Tag>
  </Box>
);

export const BasicExample = Template.bind({});
BasicExample.args = defaultArgs;

export const WithCloseIcon = Template.bind({});
WithCloseIcon.args = {
  ...defaultArgs,
  hasCloseIcon: true,
};

export const WithCustomIcon: Story<TagProps> = ({ hasCloseIcon: withCloseIcon, onClick, disabled, children }) => (
  <Box display="flex">
    <Tag
      hasCloseIcon={withCloseIcon}
      onClick={onClick}
      icon={<IconWhatsapp aria-hidden fill="currentColor" size={16} />}
      disabled={disabled}
    >
      {children}
    </Tag>
  </Box>
);
WithCustomIcon.args = defaultArgs;
