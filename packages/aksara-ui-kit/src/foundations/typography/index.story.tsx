import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, Text, Paragraph, Link } from '.';
import { AksaraReset } from '..';

const readme = require('./README.md');

storiesOf('Foundations/Typography', module)
  .add(
    'heading',
    () => (
      <AksaraReset>
        <Heading size={900} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={800} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={700} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={600} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={500} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={400} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={300} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
        <Heading size={200} marginTop="sm">
          We are making AI technology accessible to everyone
        </Heading>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: ['Theme', 'AksaraReset']
      }
    }
  )
  .add(
    'text',
    () => (
      <AksaraReset>
        <div>
          <Text size={400}>We are making AI technology accessible to everyone</Text>
        </div>
        <div>
          <Text size={300}>We are making AI technology accessible to everyone</Text>
        </div>
        <div>
          <Text size={200}>We are making AI technology accessible to everyone</Text>
        </div>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: ['Theme', 'AksaraReset']
      }
    }
  )
  .add(
    'link',
    () => (
      <AksaraReset>
        <div>
          <Link size={300} href="https://www.youtube.com/watch?v=lAReYN4aMow">
            We are making AI technology accessible to everyone
          </Link>
        </div>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: ['Theme', 'AksaraReset']
      }
    }
  )
  .add(
    'paragraph',
    () => (
      <AksaraReset>
        <Paragraph size={400} marginTop="sm">
          We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
          conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
          Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
          Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and
          Retail.
        </Paragraph>
        <Paragraph size={300} marginTop="sm">
          We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
          conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
          Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
          Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and
          Retail.
        </Paragraph>
        <Paragraph size={200} marginTop="sm">
          We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
          conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
          Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
          Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and
          Retail.
        </Paragraph>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: ['Theme', 'AksaraReset']
      }
    }
  );
