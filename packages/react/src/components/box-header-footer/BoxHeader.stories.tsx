import * as React from 'react';

import { IconTrash, IconArrowLeft } from '@aksara-ui/icons';
import { Stack, Box } from '../../layout';
import { Text } from '../../typography';

import { SideSheet, SideSheetContent } from '../side-sheet';
import { Button, IconButton } from '../button';
import { Avatar } from '../avatar';
import { ModalHeaderIcon } from '../modal';
import { BoxFooter, BoxHeader } from '.';

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

export const BasicExample = ({
  size,
  hideCloseButton,
  centerTitle,
}: {
  size: 'sm' | 'lg';
  hideCloseButton: boolean;
  centerTitle: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={
          <BoxHeader
            size={size}
            centerTitle={centerTitle}
            hideCloseButton={hideCloseButton}
            closeButtonHandler={() => setIsOpen(false)}
            title={<Text size={size}>Title</Text>}
          />
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={
          <BoxHeader
            size={size}
            closeButtonHandler={() => setIsOpen(false)}
            backButton={
              <IconButton variant="plain" size={size}>
                <IconArrowLeft aria-hidden size={24} fill="currentColor" />
              </IconButton>
            }
            title={<Text size={size}>Title</Text>}
          />
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={
          <BoxHeader
            size={size}
            closeButtonHandler={() => setIsOpen(false)}
            title={
              <Stack alignItems="center" direction="horizontal" spacing="sm">
                <Avatar name="A M" bg="blue07" size={size} />
                <Text size={size}>Jessica</Text>
              </Stack>
            }
          />
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={
          <BoxHeader
            hideCloseButton
            backButton
            size={size}
            closeButtonHandler={() => setIsOpen(false)}
            title={<Text size="sm">Title</Text>}
            actions={
              <Button size="sm" variant="primary">
                Label
              </Button>
            }
          />
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={<ModalHeaderIcon size={size} id="stories-title" title="Delete item?" icon={IconTrash} />}
      />
    </Box>
  );
};

WithIcon.args = {};
