import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button } from '.';
import { AksaraReset, Box } from '../../foundations';
import { StoryWrapper, StoryContainer, globalPropTablesExclude } from '../../utils/storybook';

const readme = require('./README.md');

storiesOf('Components/Button', module)
  .addDecorator(storyFn => (
    <AksaraReset>
      <StoryWrapper>{storyFn()}</StoryWrapper>
    </AksaraReset>
  ))
  .add(
    'basic',
    () => (
      <StoryContainer>
        <div>
          <Button style={{ margin: '0 8px' }} size="sm">
            Push Me
          </Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }} size="lg">
            Push Me
          </Button>
        </div>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: [...globalPropTablesExclude]
      }
    }
  )
  .add(
    'button states',
    () => (
      <StoryContainer>
        <Box mb="lg">
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
        </Box>
        <Box mb="lg">
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
          <Button style={{ margin: '0 8px' }}>Push Me</Button>
        </Box>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme },
      props: {
        propTablesExclude: [...globalPropTablesExclude, 'Box']
      }
    }
  );
