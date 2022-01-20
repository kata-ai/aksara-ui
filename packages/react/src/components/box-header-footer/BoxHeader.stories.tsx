import * as React from 'react';

import { IconTrash, IconArrowLeft } from '@aksara-ui/icons';
import { Stack, Box } from '../../layout';
import { Heading } from '../../typography';

import { SideSheet, SideSheetContent } from '../side-sheet';
import { Button, IconButton } from '../button';
import { Avatar } from '../avatar';
import { ModalHeaderIcon } from '../modal';
import { BoxFooter, BoxHeader, CloseButton } from '.';

export default {
  title: 'Core/Components/Box Header Footer/Header',
  component: [SideSheet, BoxHeader, SideSheetContent, BoxFooter],
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#fcf1f1',
        },
      ],
    },
  },
};

const argTypes = {
  size: {
    options: ['sm', 'lg'],
    control: { type: 'radio' },
  },
};

export const BasicExample = ({ size, centerTitle }: { size: 'sm' | 'lg'; centerTitle: boolean }) => {
  return (
    <Box p="md" width={400}>
      <BoxHeader
        size={size}
        centerTitle={centerTitle}
        title={
          <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
            Title
          </Heading>
        }
      />
    </Box>
  );
};
BasicExample.argTypes = argTypes;
BasicExample.args = {
  size: 'sm',
  centerTitle: true,
  hideCloseButton: false,
};

export const BackAndCloseIcon = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md" width={400}>
      <BoxHeader
        size={size}
        closeButton={<CloseButton />}
        backButton={
          <IconButton variant="plain" size={size}>
            <IconArrowLeft aria-hidden size={24} fill="currentColor" />
          </IconButton>
        }
        title={
          <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
            Title
          </Heading>
        }
      />
    </Box>
  );
};

BackAndCloseIcon.argTypes = argTypes;
BackAndCloseIcon.args = {
  size: 'sm',
};

export const AvatarHeader = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md" width={400}>
      <BoxHeader
        size={size}
        closeButton={<CloseButton />}
        title={
          <Stack alignItems="center" direction="horizontal" spacing="sm">
            <Avatar name="A M" bg="blue07" size={size} />
            <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
              Jessica
            </Heading>
          </Stack>
        }
      />
    </Box>
  );
};

AvatarHeader.argTypes = argTypes;
AvatarHeader.args = {
  size: 'sm',
};

export const TitleAndButton = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md">
      <BoxHeader
        backButton
        size={size}
        title={
          <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
            Title
          </Heading>
        }
        actions={
          <Button size="sm" variant="primary">
            Label
          </Button>
        }
      />
    </Box>
  );
};

TitleAndButton.argTypes = argTypes;
TitleAndButton.args = {
  size: 'sm',
};

export const WithIcon = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md" width={400}>
      <ModalHeaderIcon
        size={size}
        id="stories-title"
        title="Delete item?"
        icon={IconTrash}
        iconContainerStyle={{
          backgroundColor: 'red01',
          color: 'red07',
        }}
      />
    </Box>
  );
};

WithIcon.args = {};
