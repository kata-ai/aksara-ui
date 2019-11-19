import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { UnstyledAnchor, UnstyledButton } from '.';
import { Box } from '../box';
import { WicaraReset } from '../reset';

const readme = require('./README.md');

storiesOf('Core|Foundations/Common', module)
  .add(
    'UnstyledAnchor',
    () => (
      <WicaraReset>
        <Box padding="sm">
          <a
            href="https://www.youtube.com/watch?v=ORyw6TGLBvk"
            target="_blank"
            rel="noopener noreferrer"
          >
            I'm an anchor!
          </a>{' '}
          <UnstyledAnchor
            href="https://www.youtube.com/watch?v=ORyw6TGLBvk"
            target="_blank"
            rel="noopener noreferrer"
          >
            I'm an unstyled anchor!
          </UnstyledAnchor>
        </Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'UnstyledButton',
    () => (
      <WicaraReset>
        <Box padding="sm">
          <button type="button">I'm a button!</button>{' '}
          <UnstyledButton type="button">I'm an unstyled button!</UnstyledButton>
        </Box>
      </WicaraReset>
    ),
    {
      notes: { markdown: readme }
    }
  );
