import * as React from 'react';

import { Box } from '../../../box';
import { Anchor } from '../../../typography';
import { UnstyledAnchor } from '.';

const readme = require('../../README.md');

export default {
  title: 'Core/Foundations/Common/UnstyledAnchor',
  component: UnstyledAnchor,
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 1 },
  },
};

export const Example = () => (
  <Box padding="sm">
    <Anchor href="https://www.youtube.com/watch?v=ORyw6TGLBvk" target="_blank" rel="noopener noreferrer">
      I&apos;m an anchor!
    </Anchor>{' '}
    <UnstyledAnchor href="https://www.youtube.com/watch?v=ORyw6TGLBvk" target="_blank" rel="noopener noreferrer">
      I&apos;m an unstyled anchor!
    </UnstyledAnchor>
  </Box>
);
