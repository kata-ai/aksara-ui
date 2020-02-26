import * as React from 'react';

import { Heading, Text, Paragraph } from '.';
import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import { Stack } from '../common';

const readme = require('./README.md');

export default {
  title: 'Core|Foundations/Typography',
  component: [Text, Heading, Paragraph],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <SystemBlock
    title="Typography"
    subtitle="This page contains set of Text Styles that works on public pages and platform pages. Text Styles are available in different sizes and properties that are already calculated using modular scale, details could be seen on Visual Guideline."
  >
    <Stack spacing="xl">
      <SystemSubheading>Typography Scales</SystemSubheading>
      <ComponentBlock title="Heading" withBackground>
        <Stack spacing="md">
          <Heading scale={900}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={800}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={700}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={600}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={500}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={400}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={300}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={200}>We are making AI technology accessible to everyone</Heading>
          <Heading scale={100} color="#626e6d">
            We are making AI technology accessible to everyone
          </Heading>
        </Stack>
      </ComponentBlock>
      <ComponentBlock title="Text" withBackground>
        <Stack spacing="md">
          <Text display="block" scale={500}>
            We are making AI technology accessible to everyone
          </Text>
          <Text display="block" scale={400}>
            We are making AI technology accessible to everyone
          </Text>
          <Text display="block" scale={300}>
            We are making AI technology accessible to everyone
          </Text>
          <Text display="block" scale={200}>
            We are making AI technology accessible to everyone
          </Text>
        </Stack>
      </ComponentBlock>
      <ComponentBlock title="Paragraph" withBackground>
        <Stack spacing="md">
          <Paragraph scale={400}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
            conversation so we can improve the way humans collaborate with technology to be more productive and
            empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking &
            Financial Service, and Retail.
          </Paragraph>
          <Paragraph scale={300}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
            conversation so we can improve the way humans collaborate with technology to be more productive and
            empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking &
            Financial Service, and Retail.
          </Paragraph>
        </Stack>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
