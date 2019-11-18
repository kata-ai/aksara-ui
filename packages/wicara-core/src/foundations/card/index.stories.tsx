import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { WicaraReset } from '../reset';
import { Box } from '../box';
import { Card } from './index';
import { Heading, Paragraph } from '../typography';
import { UnstyledAnchor, UnstyledButton } from '../common';

const readme = require('./README.md');

const Anchor = styled(UnstyledAnchor)`
  display: flex;
  flex-direction: column;
  flex: 1 0 33.3%;
  margin: 8px;
`;

const StyledButton = styled(UnstyledButton)`
  display: flex;
  flex-direction: column;
  flex: 1 0 33.3%;
  margin: 8px;
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
        <Box padding="sm" display="flex" flexWrap="wrap" position="relative">
          <Anchor href="https://www.google.com/" target="_blank">
            <Card
              display="flex"
              flex={1}
              flexDirection="column"
              bg="white"
              borderRadius="md"
              boxShadow="layer100"
            >
              <img
                alt="Example image"
                src="https://picsum.photos/id/873/1072/708"
                style={{
                  height: 248,
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
              <Box padding="sm" flex="1 1 auto">
                <Heading scale="heading3">An Example Card</Heading>
                <Paragraph marginTop="xs" marginBottom={0}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis
                  doloremque quisquam sequi vel eaque aperiam vitae facere quia atque, hic, unde
                  animi asperiores repudiandae quis ab enim repellat?
                </Paragraph>
              </Box>
            </Card>
          </Anchor>
          <StyledButton type="button" onClick={() => alert('Hello!')}>
            <Card
              display="flex"
              flex={1}
              flexDirection="column"
              bg="white"
              borderRadius="md"
              boxShadow="layer100"
            >
              <Box padding="sm" flex="1 1 auto">
                <Heading scale="heading3">An Example Card</Heading>
                <Paragraph marginTop="xs" marginBottom={0}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis
                  doloremque quisquam sequi vel eaque aperiam vitae facere quia atque, hic, unde
                  animi asperiores repudiandae quis ab enim repellat?
                </Paragraph>
              </Box>
            </Card>
          </StyledButton>
        </Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  );
