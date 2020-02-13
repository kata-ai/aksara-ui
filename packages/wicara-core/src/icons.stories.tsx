/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { SystemWrapper, SystemBlock, SystemSubheading } from './utils/storybook';
import { Box, Text } from './foundations';

import {
  IconBot,
  IconBotFlows,
  IconModule,
  IconModuleLibrary,
  IconModuleTick,
  IconAPI,
  IconCMS,
  IconCommand,
  IconDeploy,
  IconEnvironments,
  IconNLU,
  // @ts-ignore
} from '../../aksara-icons/src';

import { Card } from './index';

const readme = require('../../aksara-icons/README.md');

const IconGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 6 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

// TODO: Maybe use Suspense + lazy load these icons by path?
const IconDetail: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <Card elevation={1}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height={167}
        p="sm"
      >
        <Box>{children}</Box>
        <Text as="h5" scale={300} fontWeight={400} color="grey07" mt="xs" mb={0}>
          {name}
        </Text>
      </Box>
    </Card>
  );
};

const story = storiesOf('Core|Icons', module).addDecorator(SystemWrapper);

story.add(
  'icon library',
  () => (
    <SystemBlock
      title="Icons"
      subtitle="Iconography uses symbols to represent meaning visually. They communicate a message and should be distinct and informative. Icons should be simple, yet clear enough to grab attention."
      noBackground
    >
      <SystemSubheading>AI</SystemSubheading>
      <IconGrid>
        <IconDetail name="IconBot">
          <IconBot />
        </IconDetail>
        <IconDetail name="IconBotFlows">
          <IconBotFlows />
        </IconDetail>
        <IconDetail name="IconModule">
          <IconModule />
        </IconDetail>
        <IconDetail name="IconModuleLibrary">
          <IconModuleLibrary />
        </IconDetail>
        <IconDetail name="IconModuleTick">
          <IconModuleTick />
        </IconDetail>
        <IconDetail name="IconAPI">
          <IconAPI />
        </IconDetail>
        <IconDetail name="IconCMS">
          <IconCMS />
        </IconDetail>
        <IconDetail name="IconCommand">
          <IconCommand />
        </IconDetail>
        <IconDetail name="IconDeploy">
          <IconDeploy />
        </IconDetail>
        <IconDetail name="IconEnvironments">
          <IconEnvironments />
        </IconDetail>
        <IconDetail name="IconNLU">
          <IconNLU />
        </IconDetail>
      </IconGrid>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
