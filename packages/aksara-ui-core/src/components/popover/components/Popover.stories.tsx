import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SystemWrapper, SystemBlock } from '../../../utils/storybook';

import Popover from './Popover';
import { Button } from '../../button';
import { Card } from '../../../foundations';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Popover', module).addDecorator(SystemWrapper);

story.add(
  'basic',
  () => {
    return (
      <SystemBlock title="Popover" subtitle="Popover displays floating content in relation to a target.">
        <Popover
          trigger={
            <Button block variant="primary">
              Toggle Popover
            </Button>
          }
        >
          <Card mt="xs" p="md" style={{ width: 250 }} elevation={3}>
            This is a popover
          </Card>
        </Popover>
      </SystemBlock>
    );
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
