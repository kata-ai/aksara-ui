import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { AksaraReset } from '../reset';
import { Box, BorderBox } from '.';
import { Heading, Paragraph } from '../typography';

const readme = require('./README.md');

storiesOf('Aksara UI Kit|Foundations/Box', module)
  .add(
    'default',
    () => (
      <AksaraReset>
        <Box>I'm inside a box!</Box>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'with color/padding',
    () => (
      <AksaraReset>
        <Box padding="sm" color="grey01" bg="blue06">
          I'm inside a box!
        </Box>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'border box',
    () => (
      <AksaraReset>
        <Box padding="sm" height="100%" width="100%" bg="grey01">
          <BorderBox borderRadius={8} width={[null, null, 1, 1 / 2, 1 / 3]} noOverflow>
            <img
              src="https://picsum.photos/id/873/1072/708"
              alt="Example image"
              style={{ width: '100%', height: 248, objectFit: 'cover' }}
            />
            <Box padding="sm" bg="white">
              <Heading size={500}>An Example Card</Heading>
              <Paragraph marginTop="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis doloremque quisquam
                sequi vel eaque aperiam vitae facere quia atque, hic, unde animi asperiores repudiandae quis ab enim
                repellat?
              </Paragraph>
            </Box>
          </BorderBox>
        </Box>
      </AksaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  );
