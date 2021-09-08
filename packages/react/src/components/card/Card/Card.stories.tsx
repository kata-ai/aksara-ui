import * as React from 'react';
import { IconBriefcase, IconKebab } from '@aksara-ui/icons';
import { action } from '@storybook/addon-actions';

import Card from './Card';
import { Paragraph, Box, Heading, Stack } from '../../../layout';
import { Button, IconButton } from '../../button';
import { Avatar } from '../../avatar';
import { CardHeader } from '../CardHeader';
import { Badge } from '../../badge';

export default {
  title: 'Core/Components/Card',
  component: Card,
};

export const BodyCard = () => {
  return (
    <Box display="inline-flex">
      <Card p="lg">
        <Stack spacing="md">
          <Avatar icon={IconBriefcase} bg="yellow01" color="yellow07" />
          <Stack spacing="xs">
            <Heading scale={400}>Deno</Heading>
            <Paragraph scale={400} color="grey07">
              A secure runtime for JavaScript and TypeScript
            </Paragraph>
          </Stack>
          <Button block onClick={action('click')}>
            Select
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export const WithHeader = () => {
  return (
    <Box display="inline-flex">
      <Card p="lg" width={300}>
        <Stack spacing="md">
          <CardHeader
            title="Deno"
            avatar={<Avatar icon={IconBriefcase} bg="yellow01" color="yellow07" />}
            actions={
              <IconButton variant="plain" size="lg" onClick={action('click')}>
                <IconKebab fill="currentColor" aria-hidden />
              </IconButton>
            }
          />
          <Stack spacing="xs">
            <Box display="flex" flexWrap="wrap" mx="-4px">
              <Box m={4}>
                <Badge>Badge 1</Badge>
              </Box>
              <Box m={4}>
                <Badge>Badge 2</Badge>
              </Box>
              <Box m={4}>
                <Badge>Badge 3</Badge>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};
