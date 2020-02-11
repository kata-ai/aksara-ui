import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import { Inline } from '../../../foundations';
import badgeVariants, { BadgeVariants } from '../variants';

import Badge from './Badge';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Badge', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
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
  ),
  {
    notes: { markdown: readme },
  }
);
