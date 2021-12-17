import * as React from 'react';
import { IconTrash } from '@aksara-ui/icons';

import { Stack, Box } from '../../layout';
import { Heading, Text, Paragraph } from '../../typography';

import Modal from './components/Modal';
import BoxHeader from '../box-header-footer/components/BoxHeader';
import ModalHeaderIcon from './components/ModalHeaderIcon';
import ModalContent from './components/ModalContent';
import BoxFooter from '../box-header-footer/components/BoxFooter';
import { Button } from '../button';

export default {
  title: 'Core/Components/Modal',
  component: Modal,
};

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the modal.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal labelledById="stories-title" hideCloseButton isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BoxHeader
          centerTitle
          size="lg"
          title={
            <Heading scale={500} id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />
        <ModalContent>
          <Stack textAlign="center">
            <Paragraph scale={300}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          </Stack>
        </ModalContent>
        <BoxFooter>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="xs">
            <Button block size="lg" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button block variant="primary" size="lg">
              Confirm
            </Button>
          </Box>
        </BoxFooter>
      </Modal>
    </Box>
  );
};

export const WithCloseButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the modal.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal labelledById="stories-title" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BoxHeader
          centerTitle
          size="lg"
          title={
            <Heading scale={500} id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />
        <ModalContent>
          <Stack textAlign="center">
            <Paragraph scale={300}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          </Stack>
        </ModalContent>
        <BoxFooter>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="xs">
            <Button block size="lg" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button block variant="primary" size="lg">
              Confirm
            </Button>
          </Box>
        </BoxFooter>
      </Modal>
    </Box>
  );
};

export const WithFocusTrap = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the modal.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal
        labelledById="stories-title"
        enableFocusTrap
        hideCloseButton
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <BoxHeader
          centerTitle
          size="lg"
          title={
            <Heading scale={500} id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />
        <ModalContent>
          <Stack textAlign="center">
            <Paragraph scale={300}>If you repeatedly press tab, the focus will not leave this modal.</Paragraph>
          </Stack>
        </ModalContent>
        <BoxFooter>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="xs">
            <Button block size="lg" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button block variant="primary" size="lg">
              Confirm
            </Button>
          </Box>
        </BoxFooter>
      </Modal>
    </Box>
  );
};

export const WithIcon = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the modal.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal labelledById="stories-title" hideCloseButton isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeaderIcon id="stories-title" title="Delete item?" icon={IconTrash} />
        <ModalContent>
          <Stack textAlign="center">
            <Paragraph scale={300}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          </Stack>
        </ModalContent>
        <BoxFooter>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="xs">
            <Button block size="lg" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button block variant="primary" size="lg">
              Confirm
            </Button>
          </Box>
        </BoxFooter>
      </Modal>
    </Box>
  );
};
