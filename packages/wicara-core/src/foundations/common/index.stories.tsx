import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { UnstyledAnchor, UnstyledButton } from '.';
import { Box } from '../box';
import { WicaraProvider } from '../reset';

const readme = require('./README.md');

storiesOf('Core|Foundations/Common', module)
  .add(
    'UnstyledAnchor',
    () => (
      <WicaraProvider>
        <Box padding="sm">
          <a
            href="https://www.youtube.com/watch?v=ORyw6TGLBvk"
            target="_blank"
            rel="noopener noreferrer"
          >
            I&apos;m an anchor!
          </a>{' '}
          <UnstyledAnchor
            href="https://www.youtube.com/watch?v=ORyw6TGLBvk"
            target="_blank"
            rel="noopener noreferrer"
          >
            I&apos;m an unstyled anchor!
          </UnstyledAnchor>
        </Box>
      </WicaraProvider>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'UnstyledButton',
    () => (
      <WicaraProvider>
        <Box padding="sm">
          <button type="button">I&apos;m a button!</button>{' '}
          <UnstyledButton type="button">I&apos;m an unstyled button!</UnstyledButton>
        </Box>
      </WicaraProvider>
    ),
    {
      notes: { markdown: readme }
    }
  );
