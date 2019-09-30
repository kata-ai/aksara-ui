import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, Text, Paragraph } from '../typography';
import { StorybookWrapper, StoryContainer, ComponentBlock } from '../../utils/storybook';

const readme = require('./README.md');

storiesOf('Core|Foundations/Typography', module)
  .addDecorator(StorybookWrapper)
  .add(
    'heading',
    () => (
      <StoryContainer>
        <ComponentBlock title="Heading 1">
          <Heading scale="heading1">We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 2">
          <Heading scale="heading2">We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 3">
          <Heading scale="heading3">We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 4">
          <Heading scale="heading4">We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 5">
          <Heading scale="heading5">We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'text',
    () => (
      <StoryContainer>
        <ComponentBlock title="Text large">
          <Text scale="large">We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text">
          <Text>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text small">
          <Text scale="small">We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'paragraph',
    () => (
      <StoryContainer>
        <ComponentBlock title="Paragraph">
          <Paragraph>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on
            understanding human conversation so we can improve the way humans collaborate with
            technology to be more productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major corporations in Indonesia
            across different industries, including FMCG, Telecommunication, Banking & Financial
            Service, and Retail.
          </Paragraph>
        </ComponentBlock>
        <ComponentBlock title="Paragraph small">
          <Paragraph scale="small">
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on
            understanding human conversation so we can improve the way humans collaborate with
            technology to be more productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major corporations in Indonesia
            across different industries, including FMCG, Telecommunication, Banking & Financial
            Service, and Retail.
          </Paragraph>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  );
