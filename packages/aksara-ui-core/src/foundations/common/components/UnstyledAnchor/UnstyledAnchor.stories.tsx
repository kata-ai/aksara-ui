import * as React from 'react';

import { SystemWrapper } from '../../../../utils/storybook';
import { UnstyledAnchor } from '.';
import { Box } from '../../../box';

const readme = require('../../README.md');

export default {
  title: 'Core|Foundations/Common/UnstyledAnchor',
  component: UnstyledAnchor,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <Box padding="sm">
    <a href="https://www.youtube.com/watch?v=ORyw6TGLBvk" target="_blank" rel="noopener noreferrer">
      I&apos;m an anchor!
    </a>{' '}
    <UnstyledAnchor href="https://www.youtube.com/watch?v=ORyw6TGLBvk" target="_blank" rel="noopener noreferrer">
      I&apos;m an unstyled anchor!
    </UnstyledAnchor>
  </Box>
);
