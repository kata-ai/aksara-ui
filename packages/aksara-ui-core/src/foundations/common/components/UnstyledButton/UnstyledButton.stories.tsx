import * as React from 'react';

import { SystemWrapper } from '../../../../utils/storybook';
import { UnstyledButton } from '.';
import { Box } from '../../../box';

const readme = require('../../README.md');

export default {
  title: 'Core|Foundations/Common/UnstyledButton',
  component: UnstyledButton,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <Box padding="sm">
    <button type="button">I&apos;m a button!</button>{' '}
    <UnstyledButton type="button">I&apos;m an unstyled button!</UnstyledButton>
  </Box>
);
