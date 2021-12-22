import * as React from 'react';

import { Stack, Box } from '../../layout';
import { Anchor, Heading, Paragraph, Text } from '../../typography';

import { SideSheet, SideSheetContent } from '../side-sheet';
import { Button } from '../button';
import { BoxFooter, BoxHeader } from '.';

export default {
  title: 'Core/Components/Box Header Footer/Footer',
  component: [SideSheet, BoxHeader, SideSheetContent, BoxFooter],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export const BasicExample = ({ size, caption }: { size: 'sm' | 'md' | 'lg'; caption: string }) => {
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
            size={size}
            actions={
              <Stack direction="horizontal" spacing="xs">
                <Button block size={size} onClick={() => setIsOpen(false)}>
                  Label
                </Button>
                <Button block variant="primary" size={size}>
                  Label
                </Button>
              </Stack>
            }
            caption={caption}
          />
        }
      />
    </Box>
  );
};

BasicExample.args = {
  size: 'sm',
  caption: '',
};

export const FullWidthButton = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
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
              <Heading scale={300} id="stories-title" textAlign="center">
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
            size={size}
            actions={
              <Stack direction="horizontal" spacing="xs" width={'100%'}>
                <Button block size={size} onClick={() => setIsOpen(false)}>
                  Label
                </Button>
                <Button block variant="primary" size={size}>
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

FullWidthButton.args = {
  size: 'lg',
};
