import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { componentStyles, fonts } from '../../../utils';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Core/Foundations/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: Object.keys(componentStyles.paragraph).map(k => parseInt(k, 10)),
      },
    },
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

const Template: Story<ParagraphProps> = args => (
  <Paragraph onClick={action('button-click')} {...args}>
    We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
    conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
    Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
    Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and Retail.
  </Paragraph>
);

export const Example = Template.bind({});
Example.args = {
  scale: 400,
  fontFamily: 'system',
  fontWeight: 400,
};
