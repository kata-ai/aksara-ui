import * as React from 'react';

import { Text, Paragraph, Stack, Box, Anchor } from '../../foundations';

import Dialog from './components/Dialog';
import DialogHeader from './components/DialogHeader';
import DialogContent from './components/DialogContent';
import DialogFooter from './components/DialogFooter';
import { Button } from '../button';

export default {
  title: 'Core/Components/Dialog',
  component: [Dialog, DialogHeader, DialogContent, DialogFooter],
};

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the dialog.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Dialog
      </button>
      <Dialog labelledById="stories-title" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader id="stories-title">Basic Example</DialogHeader>
        <DialogContent>
          <Stack>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen simplicia, vestra
              versuta.{' '}
              <Anchor href="https://www.youtube.com/watch?v=DvKhRkE4VlY" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </Anchor>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas
              doloris, divitiae, valitudo.
            </Paragraph>
          </Stack>
        </DialogContent>
        <DialogFooter>
          <Box display="flex" flexDirection="row-reverse">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Box>
        </DialogFooter>
      </Dialog>
    </Box>
  );
};

export const WithFocusTrap = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the dialog.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Dialog
      </button>
      <Dialog labelledById="stories-title" enableFocusTrap isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader id="stories-title">Focus Trap Example</DialogHeader>
        <DialogContent>
          <Stack>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen simplicia, vestra
              versuta.{' '}
              <Anchor href="https://www.youtube.com/watch?v=DvKhRkE4VlY" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </Anchor>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas
              doloris, divitiae, valitudo.
            </Paragraph>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
