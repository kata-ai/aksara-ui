import * as React from 'react';
import { Story } from '@storybook/react';

import { fonts } from '../../../utils';
import { textScaleOptions } from '../utils/storybook';
import Anchor, { AnchorProps } from './Anchor';

export default {
  title: 'Core/Foundations/Components/Typography/Anchor',
  component: Anchor,
  argTypes: {
    scale: textScaleOptions,
    fontFamily: {
      control: {
        type: 'select',
        options: Object.keys(fonts),
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
};

const Template: Story<AnchorProps> = args => (
  <Anchor target="_blank" rel="noopener noreferrer" {...args}>
    We are making AI technology accessible to everyone
  </Anchor>
);

export const Example = Template.bind({});
Example.args = {
  href: 'https://www.youtube.com/watch?v=P_mQpbCSQOo',
  scale: 400,
  fontFamily: 'system',
  fontWeight: 400,
};

export const MediaQueries = () => (
  <Anchor
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.youtube.com/watch?v=P_mQpbCSQOo"
    scale={[400, 500]}
  >
    We are making AI technology accessible to everyone
  </Anchor>
);
