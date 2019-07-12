import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, Text, Paragraph, Link } from '.';
import { AksaraReset } from '..';
import { StoryWrapper, StoryContainer, ComponentBlock } from '../../utils/storybook';

const readme = require('./README.md');

storiesOf('Foundations/Typography', module)
  .addDecorator(storyFn => (
    <AksaraReset>
      <StoryWrapper>{storyFn()}</StoryWrapper>
    </AksaraReset>
  ))
  .add(
    'heading',
    () => (
      <StoryContainer>
        <ComponentBlock title="Heading 900">
          <Heading size={900}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 800">
          <Heading size={800}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 700">
          <Heading size={700}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 600">
          <Heading size={600}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 500">
          <Heading size={500}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 400">
          <Heading size={400}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 300">
          <Heading size={300}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 200">
          <Heading size={200}>We are making AI technology accessible to everyone</Heading>
        </ComponentBlock>
        <ComponentBlock title="Heading 100">
          <Heading size={100}>We are making AI technology accessible to everyone</Heading>
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
        <ComponentBlock title="Text 500">
          <Text size={500}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text 400">
          <Text size={400}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text 300">
          <Text size={300}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
        <ComponentBlock title="Text 200">
          <Text size={200}>We are making AI technology accessible to everyone</Text>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'link',
    () => (
      <StoryContainer>
        <ComponentBlock title="Link 500">
          <Link size={500} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </ComponentBlock>
        <ComponentBlock title="Link 400">
          <Link size={400} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </ComponentBlock>
        <ComponentBlock title="Link 300">
          <Link size={300} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </ComponentBlock>
        <ComponentBlock title="Link 200">
          <Link size={200} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
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
        <ComponentBlock title="Paragraph 400">
          <Paragraph size={400}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
            conversation so we can improve the way humans collaborate with technology to be more productive and
            empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking &
            Financial Service, and Retail.
          </Paragraph>
        </ComponentBlock>
        <ComponentBlock title="Paragraph 300">
          <Paragraph size={300}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
            conversation so we can improve the way humans collaborate with technology to be more productive and
            empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking &
            Financial Service, and Retail.
          </Paragraph>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  );
