import * as React from 'react';
import { IconBriefcase } from '@aksara-ui/icons';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../../layout';
import Pill, { PillProps } from './Pill';

export default {
  title: 'Core/Components/Pill',
  component: Pill,
  argTypes: {
    variant: {
      options: ['default', 'info', 'critical', 'success', 'active'],
    },
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

const defaultArgs: PillProps = {
  variant: 'default',
  disabled: false,
  children: 'Keyword',
};

const Template: Story<PillProps> = ({ variant, withCloseIcon, onClick, disabled, children }) => (
  <Box display="flex">
    <Pill variant={variant} withCloseIcon={withCloseIcon} onClick={onClick} disabled={disabled}>
      {children}
    </Pill>
  </Box>
);

export const BasicExample = Template.bind({});
BasicExample.args = defaultArgs;

export const WithCloseIcon = Template.bind({});
WithCloseIcon.args = {
  ...defaultArgs,
  withCloseIcon: true,
};

export const WithCustomIcon: Story<PillProps> = ({ variant, withCloseIcon, onClick, disabled, children }) => (
  <Box display="flex">
    <Pill
      variant={variant}
      withCloseIcon={withCloseIcon}
      onClick={onClick}
      icon={<IconBriefcase aria-hidden fill="currentColor" size={16} />}
      disabled={disabled}
    >
      {children}
    </Pill>
  </Box>
);
