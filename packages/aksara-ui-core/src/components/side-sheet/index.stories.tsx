import * as React from 'react';

import { Text, Paragraph, Stack, Box, Anchor } from '../../foundations';

import { SideSheet, SideSheetHeader, SideSheetContent, SideSheetFooter } from '.';
import { Button } from '../button';

export default {
  title: 'Core/Components/Side Sheet',
  component: [SideSheet, SideSheetHeader, SideSheetContent, SideSheetFooter],
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
        <SideSheetHeader id="stories-title">Basic Example</SideSheetHeader>
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
        <SideSheetFooter>
          <Box display="flex" flexDirection="row-reverse">
            <Button>Close</Button>
          </Box>
        </SideSheetFooter>
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
        <Paragraph my={26} mx={48}>
          Basic Example
        </Paragraph>
      </SideSheet>
    </Box>
  );
};
