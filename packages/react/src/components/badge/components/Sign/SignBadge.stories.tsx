import { Story } from '@storybook/react';
import * as React from 'react';
import { Box } from '../../../../layout';

import SignBadge, { SignBadgeProps } from './SignBadge';

export default {
  title: 'Core/Components/Badge/SignBadge',
  component: SignBadge,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template: Story<React.PropsWithChildren<SignBadgeProps>> = ({ size }) => (
  <SignBadge size={size}>
    <Box width="100%" height="100%" backgroundColor={'red07'} />
  </SignBadge>
);

export const BasicExample = Template.bind({});
BasicExample.args = {
  size: 'md',
};
