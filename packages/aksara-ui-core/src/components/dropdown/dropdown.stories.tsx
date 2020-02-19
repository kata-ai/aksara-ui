import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import { DropdownMenu } from './components/DropdownMenu';
import { DropdownMenuItem } from './components/DropdownMenuItem';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Dropdown', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <SystemBlock
      title="Dropdown Menu"
      subtitle="Message blocks are used to convey important information to users."
      noBackground
    >
      <ComponentBlock title="Usage">
        <DropdownMenu width={200}>
          <DropdownMenuItem>Menu Item One</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
          <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
        </DropdownMenu>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
