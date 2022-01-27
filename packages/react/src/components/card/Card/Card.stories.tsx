import * as React from 'react';
import { IconBriefcase, IconClock, IconKebab } from '@aksara-ui/icons';
import { action } from '@storybook/addon-actions';

import { Story } from '@storybook/react';
import Card, { CardElevation } from './Card';
import { Box, Stack, Wrap, WrapItem } from '../../../layout';
import { Heading, Paragraph } from '../../../typography';
import { Button, IconButton } from '../../button';
import { Avatar } from '../../avatar';
import { CardHeader } from '../CardHeader';
import { Badge } from '../../badge';

export default {
  title: 'Core/Components/Card',
  argTypes: {
    elevation: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
  },
};

export const BodyCard: Story<{ elevation: CardElevation }> = ({ elevation }) => {
  return (
    <Box display="inline-flex">
      <Card p="lg" elevation={elevation}>
        <Stack spacing="md">
          <Avatar icon={IconBriefcase} bg="yellow01" color="yellow07" />
          <Stack spacing="xs">
            <Heading scale={400}>Deno</Heading>
            <Paragraph scale={400} color="grey07">
              A secure runtime for JavaScript and TypeScript
            </Paragraph>
          </Stack>
          <Button block size="lg" onClick={action('click')}>
            Select
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export const Tags = () => {
  return (
    <Box display="inline-flex">
      <Card p="lg" width={300}>
        <Stack spacing="md">
          <CardHeader
            title="Deno"
            avatar={<Avatar size="md" icon={IconBriefcase} bg="yellow01" color="yellow07" />}
            actions={
              <IconButton variant="plain" size="sm" onClick={action('click')}>
                <IconKebab fill="currentColor" aria-hidden />
              </IconButton>
            }
          />
          <Stack spacing="xs">
            <Wrap spacing="xxs">
              <WrapItem>
                <Badge>Badge 1</Badge>
              </WrapItem>
              <WrapItem>
                <Badge>Badge 2</Badge>
              </WrapItem>
              <WrapItem>
                <Badge>Badge 3</Badge>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export const HorizontalCard = () => {
  return (
    <Card p="xl">
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Stack spacing="md" direction="horizontal" alignItems="center">
          <Avatar size={'xl'} name="Title" src="https://picsum.photos/id/2/400/400" />
          <Box>
            <Stack spacing="xs">
              <Heading scale={400}>Title</Heading>
              <Badge variant="info">Badge</Badge>
            </Stack>
          </Box>
        </Stack>
        <Stack spacing="20px" direction="horizontal" alignItems="center" ml="md">
          <Stack spacing="xs" direction="horizontal" alignItems="center" color="greymed04">
            <IconBriefcase size={16} fill="currentColor" aria-hidden />
            <Paragraph as="span" scale={300}>
              tri@kata.ai
            </Paragraph>
          </Stack>
          <Stack spacing="xs" direction="horizontal" alignItems="center" color="greymed04">
            <IconClock size={16} fill="currentColor" aria-hidden />
            <Paragraph as="span" scale={300}>
              Jakarta (Asia)
            </Paragraph>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};
