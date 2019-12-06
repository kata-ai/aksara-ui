import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../../utils/storybook';
import Tooltip from './Tooltip';
import { Heading, Paragraph } from '../../../foundations';
import { Button } from '../../button';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Tooltip', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => (
    <StoryContainer>
      <StoryHeader title="Tooltip" subtitle="Provides additional descriptions to elements." />
      <ComponentBlock title="Default">
        <span style={{ marginRight: 32 }}>
          <Tooltip placement="top" content="Tooltip text">
            <span>Top</span>
          </Tooltip>
        </span>
        <span style={{ marginRight: 32 }}>
          <Tooltip placement="right" content="Tooltip text">
            <span>Bottom</span>
          </Tooltip>
        </span>
        <span style={{ marginRight: 32 }}>
          <Tooltip placement="bottom" content="Tooltip text">
            <span>Left</span>
          </Tooltip>
        </span>
        <span>
          <Tooltip placement="left" content="Tooltip text">
            <span>Right</span>
          </Tooltip>
        </span>
      </ComponentBlock>
      <ComponentBlock title="Custom Content">
        <span style={{ marginRight: 32 }}>
          <Tooltip
            placement="top"
            content={
              <>
                <Heading as="h5" scale="heading5" color="white">
                  Tooltip custom heading
                </Heading>
                <Paragraph scale="small" m={0}>
                  Tooltip custom text
                </Paragraph>
              </>
            }
          >
            <span>Top</span>
          </Tooltip>
        </span>
        <span style={{ marginRight: 32 }}>
          <Tooltip
            placement="right"
            content={
              <>
                <Heading as="h5" scale="heading5" color="white">
                  Tooltip custom heading
                </Heading>
                <Paragraph scale="small" m={0}>
                  Tooltip custom text
                </Paragraph>
              </>
            }
          >
            <span>Bottom</span>
          </Tooltip>
        </span>
        <span style={{ marginRight: 32 }}>
          <Tooltip
            placement="bottom"
            content={
              <>
                <Heading as="h5" scale="heading5" color="white">
                  Tooltip custom heading
                </Heading>
                <Paragraph scale="small" m={0}>
                  Tooltip custom text
                </Paragraph>
              </>
            }
          >
            <span>Left</span>
          </Tooltip>
        </span>
        <span>
          <Tooltip
            placement="left"
            content={
              <>
                <Heading as="h5" scale="heading5" color="white">
                  Tooltip custom heading
                </Heading>
                <Paragraph scale="small" m={0}>
                  Tooltip custom text
                </Paragraph>
              </>
            }
          >
            <span>Right</span>
          </Tooltip>
        </span>
      </ComponentBlock>
      <ComponentBlock title="Components">
        <Tooltip placement="top" content="Tooltip text">
          <Button>Push Me</Button>
        </Tooltip>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
