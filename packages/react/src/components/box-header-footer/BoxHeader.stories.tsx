import * as React from 'react';

import { IconTrash, IconArrowLeft } from '@aksara-ui/icons';
import { Stack, Box } from '../../layout';
import { Heading, Text } from '../../typography';

import { SideSheet, SideSheetContent } from '../side-sheet';
import { Button, IconButton } from '../button';
import { Avatar } from '../avatar';
import { ModalHeaderIcon } from '../modal';
import { BoxFooter, BoxHeader, CloseButton } from '.';

export default {
  title: 'Core/Components/Box Header Footer/Header',
  component: [SideSheet, BoxHeader, SideSheetContent, BoxFooter],
};

const argTypes = {
  size: {
    options: ['sm', 'lg'],
    control: { type: 'radio' },
  },
};

export const BasicExample = ({ size, centerTitle }: { size: 'sm' | 'lg'; centerTitle: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BoxHeader
          size={size}
          centerTitle={centerTitle}
          title={
            <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />
      </SideSheet>
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BoxHeader
          size={size}
          closeButton={<CloseButton onClick={() => setIsOpen(false)} />}
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
      </SideSheet>
    </Box>
  );
};

BackAndCloseIcon.argTypes = argTypes;
BackAndCloseIcon.args = {
  size: 'sm',
};

export const AvatarHeader = ({ size }: { size: 'sm' | 'lg' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BoxHeader
          size={size}
          closeButton={<CloseButton onClick={() => setIsOpen(false)} />}
          title={
            <Stack alignItems="center" direction="horizontal" spacing="sm">
              <Avatar name="A M" bg="blue07" size={size} />
              <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
                Jessica
              </Heading>
            </Stack>
          }
        />
      </SideSheet>
    </Box>
  );
};

AvatarHeader.argTypes = argTypes;
AvatarHeader.args = {
  size: 'sm',
};

export const TitleAndButton = ({ size }: { size: 'sm' | 'lg' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
      </SideSheet>
    </Box>
  );
};

TitleAndButton.argTypes = argTypes;
TitleAndButton.args = {
  size: 'sm',
};

export const WithIcon = ({ size }: { size: 'sm' | 'lg' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeaderIcon size={size} id="stories-title" title="Delete item?" icon={IconTrash} />
      </SideSheet>
    </Box>
  );
};

WithIcon.args = {};
