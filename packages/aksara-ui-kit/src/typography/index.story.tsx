import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading } from '.';
import { AksaraReset } from '../components';
import { Theme } from '../Theme';
import { Text } from './Text';

storiesOf('Foundations/Typography', module)
  .add(
    'heading',
    () => (
      <Theme>
        <AksaraReset>
          <Heading size={900} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={800} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={700} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={600} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={500} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={400} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={300} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
          <Heading size={200} marginBottom="sm">
            We are making AI technology accessible to everyone
          </Heading>
        </AksaraReset>
      </Theme>
    ),
    {
      props: {
        propTablesExclude: ['Theme', 'AksaraReset']
      }
    }
  )
  .add(
    'text',
    () => (
      <Theme>
        <AksaraReset>
          <Text size={400}>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence
            company, focused on understanding human conversation so we can
            improve the way humans collaborate with technology to be more
            productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including
            FMCG, Telecommunication, Banking & Financial Service, and Retail. An
            integrated platform to build the best chatbot for any chat or
            messaging apps (even inside your own apps or website!)
          </Text>
          <Text size={300} marginTop="sm">
            We are Kata.ai, an Indonesian conversational Artificial Intelligence
            company, focused on understanding human conversation so we can
            improve the way humans collaborate with technology to be more
            productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including
            FMCG, Telecommunication, Banking & Financial Service, and Retail. An
            integrated platform to build the best chatbot for any chat or
            messaging apps (even inside your own apps or website!)
          </Text>
          <Text size={200} marginTop="sm">
            We are Kata.ai, an Indonesian conversational Artificial Intelligence
            company, focused on understanding human conversation so we can
            improve the way humans collaborate with technology to be more
            productive and empowered. Kata.ai’s Natural Language Processing
            (NLP) technology powers multi-purpose chatbots for major
            corporations in Indonesia across different industries, including
            FMCG, Telecommunication, Banking & Financial Service, and Retail. An
            integrated platform to build the best chatbot for any chat or
            messaging apps (even inside your own apps or website!)
          </Text>
        </AksaraReset>
      </Theme>
    ),
    {
      props: {
        propTablesExclude: ['Theme', 'AksaraReset']
      }
    }
  );
