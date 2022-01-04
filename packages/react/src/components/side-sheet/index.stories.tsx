import * as React from 'react';

import { Stack, Box } from '../../layout';
import { Text, Paragraph, Anchor, Heading } from '../../typography';

import { SideSheet, SideSheetContent } from '.';
import { BoxFooter, BoxHeader, CloseButton } from '../box-header-footer';
import { Button } from '../button';

export default {
  title: 'Core/Components/Side Sheet',
  component: [SideSheet, SideSheetContent],
};

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BoxHeader
          size="lg"
          closeButton={<CloseButton onClick={() => setIsOpen(false)} />}
          title={
            <Heading scale={500} id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />
        <SideSheetContent borderTop={'8px solid'} borderBottom={'8px solid'} borderColor={'greylight02'}>
          <Stack py="md" px="lg">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen simplicia, vestra
              versuta.{' '}
              <Anchor href="https://www.youtube.com/watch?v=B7yAiF1lkIw" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </Anchor>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas
              doloris, divitiae, valitudo.
            </Paragraph>
          </Stack>
        </SideSheetContent>
        <BoxFooter
          size="lg"
          actions={
            <Stack direction="horizontal" spacing="xs">
              <Button block size="lg" onClick={() => setIsOpen(false)}>
                Label
              </Button>
              <Button block variant="primary" size="lg">
                Label
              </Button>
            </Stack>
          }
          boxShadow="inset 0px 1px 0px #E5EAEF"
        />
      </SideSheet>
    </Box>
  );
};

export const WithFocusTrap = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} enableFocusTrap onClose={() => setIsOpen(false)}>
        <BoxHeader
          size="lg"
          closeButton={<CloseButton onClick={() => setIsOpen(false)} />}
          title={
            <Heading scale={500} id="stories-title" textAlign="center">
              Title
            </Heading>
          }
        />
        <SideSheetContent>
          <Stack>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen simplicia, vestra
              versuta.{' '}
              <Anchor href="https://www.youtube.com/watch?v=B7yAiF1lkIw" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </Anchor>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas
              doloris, divitiae, valitudo.
            </Paragraph>
          </Stack>
        </SideSheetContent>
        <BoxFooter
          size="lg"
          actions={
            <Stack direction="horizontal" spacing="xs">
              <Button block size="lg" onClick={() => setIsOpen(false)}>
                Label
              </Button>
              <Button block variant="primary" size="lg">
                Label
              </Button>
            </Stack>
          }
        />
      </SideSheet>
    </Box>
  );
};
