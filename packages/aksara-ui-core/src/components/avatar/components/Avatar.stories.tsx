import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { SystemWrapper, SystemBlock, SystemSubheading } from '../../../utils/storybook';
import Avatar from './Avatar';
import { Inline, Box, Text, Heading, Stack } from '../../../foundations';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Avatar', module).addDecorator(SystemWrapper);

stories.add(
  'example',
  () => (
    <SystemBlock
      title="Avatar"
      subtitle="Avatars are used to show a thumbnail representation of an individual or business in the interface. An avatar can be circular or a rounded rectangular, depending on usage."
    >
      <SystemSubheading>Default Theme</SystemSubheading>
      <Box
        mt="md"
        mb="xl"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 3 - 24px), 1fr))"
        gridGap="24px"
      >
        <Box>
          <Heading scale={100} color="grey07" mb="sm">
            Rounded
          </Heading>
          <Box display="flex" justifyContent="center" px="md" py="lg" backgroundColor="grey02">
            <Inline spacing="md">
              <Avatar shape="rounded" size={40} name="Adry Muhammad" src="https://picsum.photos/id/2/400/400" />
              <Avatar shape="rounded" size={40} color="indigo" name="Adry Muhammad" />
              <Avatar shape="rounded" size={40} color="turquoise" type="user" />
              <Avatar shape="rounded" size={40} color="green" type="team" />
            </Inline>
          </Box>
        </Box>
        <Box>
          <Heading scale={100} color="grey07" mb="sm">
            Rectangular
          </Heading>
          <Box display="flex" justifyContent="center" px="md" py="lg" backgroundColor="grey02">
            <Inline spacing="md">
              <Avatar shape="rectangular" size={40} name="Adry Muhammad" src="https://picsum.photos/id/2/400/400" />
              <Avatar shape="rectangular" size={40} color="indigo" name="Adry Muhammad" />
              <Avatar shape="rectangular" size={40} color="turquoise" type="user" />
              <Avatar shape="rectangular" size={40} color="green" type="team" />
            </Inline>
          </Box>
        </Box>
      </Box>
      <Box
        mt="md"
        mb="xl"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 2 - 24px), 1fr))"
        gridGap="24px"
      >
        <Box>
          <SystemSubheading>Type</SystemSubheading>
          <Stack spacing="md">
            <Box display="flex" flexDirection="row" alignItems="center">
              <Avatar size={40} name="Adry Muhammad" src="https://picsum.photos/id/2/400/400" />
              <Box ml="md">
                <Text scale={300}>Profile picture</Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Avatar size={40} color="turquoise" type="user" />
              <Box ml="md">
                <Text scale={300}>Profile icon</Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Avatar size={40} color="green" type="team" />
              <Box ml="md">
                <Text scale={300}>Team icon</Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Avatar size={40} color="indigo" name="Adry Muhammad" />
              <Box ml="md">
                <Text scale={300}>Initial</Text>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box>
          <SystemSubheading>Sizes</SystemSubheading>
          <Inline spacing="md">
            <Avatar size={24} src="https://picsum.photos/id/225/400/400" />
            <Avatar size={32} src="https://picsum.photos/id/777/600/400" />
            <Avatar size={40} src="https://picsum.photos/id/501/400/400" />
          </Inline>
        </Box>
      </Box>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
