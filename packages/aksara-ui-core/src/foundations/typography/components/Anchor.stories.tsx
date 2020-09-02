import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Anchor, { AnchorProps } from './Anchor';

export default {
  title: 'Core/Foundations/Anchor',
  component: Anchor,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: [200, 300, 400, 500],
      },
    },
  },
};

const Template: Story<AnchorProps> = args => (
  <Anchor onClick={action('button-click')} target="_blank" rel="noopener noreferrer" {...args}>
    We are making AI technology accessible to everyone
  </Anchor>
);

export const Example = Template.bind({});
Example.args = {
  href: 'https://www.youtube.com/watch?v=P_mQpbCSQOo',
  scale: 400,
};
