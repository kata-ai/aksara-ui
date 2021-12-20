import * as React from 'react';

import { Stack, Box } from '../../layout';
import { Text, Paragraph, Anchor, Heading } from '../../typography';

import { SideSheet, SideSheetContent } from '.';
import { BoxFooter, BoxHeader } from '../box-header-footer';
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
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={
          <BoxHeader
            size="lg"
            closeButtonHandler={() => setIsOpen(false)}
            title={
              <Heading scale={500} id="stories-title" textAlign="center">
                Title
              </Heading>
            }
          />
        }
        content={
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
        }
        footer={
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
        }
      />
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
      <SideSheet
        isOpen={isOpen}
        enableFocusTrap
        onClose={() => setIsOpen(false)}
        header={
          <BoxHeader
            size="lg"
            closeButtonHandler={() => setIsOpen(false)}
            title={
              <Heading scale={500} id="stories-title" textAlign="center">
                Title
              </Heading>
            }
          />
        }
        content={
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
        }
        footer={
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
        }
      />
    </Box>
  );
};
