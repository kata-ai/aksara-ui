import * as React from 'react';
import { IconWhatsapp } from '@aksara-ui/icons';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../../layout';
import Pill, { PillProps } from './Pill';

export default {
  title: 'Core/Components/Pill',
  component: Pill,
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

const defaultArgs: PillProps = {
  disabled: false,
  children: 'Keyword',
};

const Template: Story<PillProps> = ({ hasCloseIcon, onClick, disabled, children }) => (
  <Box display="flex">
    <Pill hasCloseIcon={hasCloseIcon} onClick={onClick} disabled={disabled}>
      {children}
    </Pill>
  </Box>
);

export const BasicExample = Template.bind({});
BasicExample.args = defaultArgs;

export const WithCloseIcon = Template.bind({});
WithCloseIcon.args = {
  ...defaultArgs,
  hasCloseIcon: true,
};

export const WithCustomIcon: Story<PillProps> = ({ hasCloseIcon: withCloseIcon, onClick, disabled, children }) => (
  <Box display="flex">
    <Pill
      hasCloseIcon={withCloseIcon}
      onClick={onClick}
      icon={<IconWhatsapp aria-hidden fill="currentColor" size={16} />}
      disabled={disabled}
    >
      {children}
    </Pill>
  </Box>
);
WithCustomIcon.args = defaultArgs;
