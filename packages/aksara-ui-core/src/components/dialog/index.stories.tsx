import * as React from 'react';

import { Text, Paragraph, Stack, Box } from '../../foundations';
import { SystemWrapper, SystemBlock } from '../../utils/storybook';

import Dialog from './components/Dialog';
import DialogHeader from './components/DialogHeader';
import DialogContent from './components/DialogContent';
import DialogFooter from './components/DialogFooter';
import { Button } from '../button';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Dialog',
  component: [Dialog, DialogHeader, DialogContent, DialogFooter],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SystemBlock
      title="Dialog"
      subtitle="Display a modal interface that will block interaction with the rest of the page with an overlay."
    >
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
              <a href="https://www.youtube.com/watch?v=DvKhRkE4VlY" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </a>
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
    </SystemBlock>
  );
};

export const WithFocusTrap = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SystemBlock title="Dialog" subtitle="Add the enableFocusTrap prop to enable focus trapping.">
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
              <a href="https://www.youtube.com/watch?v=DvKhRkE4VlY" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </a>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas
              doloris, divitiae, valitudo.
            </Paragraph>
          </Stack>
        </DialogContent>
      </Dialog>
    </SystemBlock>
  );
};
