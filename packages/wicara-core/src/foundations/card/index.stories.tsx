import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WicaraReset } from '../reset';
import { Box } from '../box';
import { Card } from './index';
import { Heading, Paragraph } from '../typography';
import styled from 'styled-components';

const readme = require('./README.md');

const UnstyledLink = styled('a')`
  color: unset;
  background: unset;
  text-decoration: none;

  &:hover,
  &:focus {
    color: unset;
    outline: none;
    text-decoration: none;
  }
`;

storiesOf('Core|Foundations/Card', module)
  .add(
    'default',
    () => (
      <WicaraReset>
        <Box padding="sm">
          <Card padding="md" background="white" boxShadow="layer100" borderRadius="md">
            I'm inside a card!
          </Card>
        </Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'composability',
    () => (
      <WicaraReset>
        <Box padding="sm">
          <UnstyledLink
            href="https://www.google.com/"
            target="_blank"
            style={{ display: 'block', width: '100%', maxWidth: '33.3%' }}
          >
            <Card borderRadius="md" boxShadow="layer100">
              <img
                alt="Example image"
                src="https://picsum.photos/id/873/1072/708"
                style={{
                  height: 248,
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
              <Box bg="white" padding="sm">
                <Heading scale="heading3">An Example Card</Heading>
                <Paragraph marginTop="xs" marginBottom={0}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis
                  doloremque quisquam sequi vel eaque aperiam vitae facere quia atque, hic, unde
                  animi asperiores repudiandae quis ab enim repellat?
                </Paragraph>
              </Box>
            </Card>
          </UnstyledLink>
        </Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  );
