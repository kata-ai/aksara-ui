import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, Text, Paragraph, Link } from '.';
import { AksaraReset } from '..';
import { StoryWrapper, StoryContainer, TypographyBlock, globalPropTablesExclude } from '../../utils/storybook';

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
        <TypographyBlock title="Heading 900">
          <Heading size={900}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 800">
          <Heading size={800}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 700">
          <Heading size={700}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 600">
          <Heading size={600}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 500">
          <Heading size={500}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 400">
          <Heading size={400}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 300">
          <Heading size={300}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 200">
          <Heading size={200}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
        <TypographyBlock title="Heading 100">
          <Heading size={100}>We are making AI technology accessible to everyone</Heading>
        </TypographyBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: [...globalPropTablesExclude]
      }
    }
  )
  .add(
    'text',
    () => (
      <StoryContainer>
        <TypographyBlock title="Text 500">
          <Text size={500}>We are making AI technology accessible to everyone</Text>
        </TypographyBlock>
        <TypographyBlock title="Text 400">
          <Text size={400}>We are making AI technology accessible to everyone</Text>
        </TypographyBlock>
        <TypographyBlock title="Text 300">
          <Text size={300}>We are making AI technology accessible to everyone</Text>
        </TypographyBlock>
        <TypographyBlock title="Text 200">
          <Text size={200}>We are making AI technology accessible to everyone</Text>
        </TypographyBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: [...globalPropTablesExclude]
      }
    }
  )
  .add(
    'link',
    () => (
      <StoryContainer>
        <TypographyBlock title="Link 500">
          <Link size={500} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </TypographyBlock>
        <TypographyBlock title="Link 400">
          <Link size={400} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </TypographyBlock>
        <TypographyBlock title="Link 300">
          <Link size={300} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </TypographyBlock>
        <TypographyBlock title="Link 200">
          <Link size={200} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </TypographyBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: [...globalPropTablesExclude]
      }
    }
  )
  .add(
    'paragraph',
    () => (
      <StoryContainer>
        <TypographyBlock title="Paragraph 400">
          <Paragraph size={400}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
            conversation so we can improve the way humans collaborate with technology to be more productive and
            empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking &
            Financial Service, and Retail.
          </Paragraph>
        </TypographyBlock>
        <TypographyBlock title="Paragraph 300">
          <Paragraph size={300}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
            conversation so we can improve the way humans collaborate with technology to be more productive and
            empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking &
            Financial Service, and Retail.
          </Paragraph>
        </TypographyBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: [...globalPropTablesExclude]
      }
    }
  );
