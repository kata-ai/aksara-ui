import * as React from 'react';

import { Text, Paragraph, Stack, Box } from '../../foundations';
import { SystemWrapper, SystemBlock } from '../../utils/storybook';

import { SideSheet, SideSheetHeader, SideSheetContent, SideSheetFooter } from '.';
import { Button } from '../button';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Side Sheet',
  component: [SideSheet, SideSheetHeader, SideSheetContent, SideSheetFooter],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SystemBlock title="Side Sheet" subtitle="Dialogs that pop out from the right side of the screen.">
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
              <a href="https://www.youtube.com/watch?v=DvKhRkE4VlY" target="_blank" rel="noopener noreferrer">
                Quamquam tu hanc copiosiorem etiam soles dicere
              </a>
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
    </SystemBlock>
  );
};

export const WithFocusTrap = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SystemBlock title="Side Sheet" subtitle="Dialogs that pop out from the right side of the screen.">
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} enableFocusTrap onClose={() => setIsOpen(false)}>
        <Paragraph my={26} mx={48}>
          Basic Example
        </Paragraph>
      </SideSheet>
    </SystemBlock>
  );
};
