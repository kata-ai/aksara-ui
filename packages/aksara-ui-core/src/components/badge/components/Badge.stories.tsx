import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import { Inline } from '../../../foundations';
import badgeVariants, { BadgeVariants } from '../variants';

import Badge from './Badge';

const readme = require('../README.md');

export default {
  title: 'Core|Components/Badge',
  component: Badge,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Badge" subtitle="Badge text for entity, status, etc.">
    <ComponentBlock title="Usage">
      <Inline spacing="xs">
        {Object.keys(badgeVariants).map((variant: BadgeVariants) => (
          <Badge key={variant} variant={variant}>
            {variant}
          </Badge>
        ))}
      </Inline>
    </ComponentBlock>
  </SystemBlock>
);
