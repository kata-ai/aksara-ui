import * as React from 'react';
import { Story } from '@storybook/react';

import { theme } from '../../../theme';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Core/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    scale: {
      options: [200, 300, 400, 500],
    },
    fontFamily: {
      options: Object.keys(theme.fonts),
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template: Story<ParagraphProps> = ({ scale, fontFamily, fontWeight }) => (
  <Paragraph {...{ scale, fontFamily, fontWeight }}>
    We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
    conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
    Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
    Indonesia across different industries, including FMCG, Telecommunication, Banking &amp; Financial Service, and
    Retail.
  </Paragraph>
);

export const Example = Template.bind({});
Example.args = {
  scale: 400,
  fontFamily: 'system',
};
