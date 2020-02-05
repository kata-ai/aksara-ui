import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, Text, Paragraph } from '.';
import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';

const readme = require('./README.md');

storiesOf('Core|Foundations/Typography', module)
  .addDecorator(SystemWrapper)
  .add(
    'heading',
    () => (
      <SystemBlock
        title="Typography"
        subtitle="This page contains set of Text Styles that works on public pages and platform pages. Text Styles are available in different sizes and properties that are already calculated using modular scale, details could be seen on Visual Guideline."
      >
        <ComponentBlock title="Heading 900">
          <Heading scale={900}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 800">
          <Heading scale={800}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 700">
          <Heading scale={700}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 600">
          <Heading scale={600}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 500">
          <Heading scale={500}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 400">
          <Heading scale={400}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 300">
          <Heading scale={300}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 200">
          <Heading scale={200}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 100">
          <Heading scale={100} color="#626e6d">
            We are making AI technology accessible to everyone
          </Heading>
        </ComponentBlock>
      </SystemBlock>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'text',
    () => (
      <SystemBlock
        title="Typography"
        subtitle="This page contains set of Text Styles that works on public pages and platform pages. Text Styles are available in different sizes and properties that are already calculated using modular scale, details could be seen on Visual Guideline."
      >
        <ComponentBlock title="Text 500">
          <Text scale={500}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text 400">
          <Text scale={400}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text 300">
          <Text scale={300}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text 200">
          <Text scale={200}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
      </SystemBlock>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'paragraph',
    () => (
      <SystemBlock
        title="Typography"
        subtitle="This page contains set of Text Styles that works on public pages and platform pages. Text Styles are available in different sizes and properties that are already calculated using modular scale, details could be seen on Visual Guideline."
      >
        <ComponentBlock title="Paragraph 400">
          <Paragraph scale={400}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on
            understanding human conversation so we can improve the way humans collaborate with
            technology to be more productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major corporations in Indonesia
            across different industries, including FMCG, Telecommunication, Banking & Financial
            Service, and Retail.
          </Paragraph>
        </ComponentBlock>
        <ComponentBlock title="Paragraph 400">
          <Paragraph scale={300}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on
            understanding human conversation so we can improve the way humans collaborate with
            technology to be more productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major corporations in Indonesia
            across different industries, including FMCG, Telecommunication, Banking & Financial
            Service, and Retail.
          </Paragraph>
        </ComponentBlock>
      </SystemBlock>
    ),
    {
      notes: { markdown: readme }
    }
  );
