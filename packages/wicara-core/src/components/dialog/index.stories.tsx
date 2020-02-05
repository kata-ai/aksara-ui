import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Text, Paragraph, Box, Heading } from '../../foundations';
import { SystemWrapper, SystemBlock } from '../../utils/storybook';

import Dialog from './components/Dialog';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Dialog', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => {
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
          <Box display="flex" alignItems="center" my="md" mx="lg">
            <Heading id="stories-title" scale={500} lineHeight="32px" m={0}>
              Basic Example
            </Heading>
          </Box>
          <Box mb="lg" mx="lg">
            <Paragraph m={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen
              simplicia, vestra versuta.{' '}
              <a
                href="https://www.youtube.com/watch?v=DvKhRkE4VlY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quamquam tu hanc copiosiorem etiam soles dicere
              </a>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur
              haec: vacuitas doloris, divitiae, valitudo.
            </Paragraph>
          </Box>
        </Dialog>
      </SystemBlock>
    );
  },
  {
    notes: { markdown: readme }
  }
);

story.add(
  'with focus trap',
  () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <SystemBlock title="Dialog" subtitle="Add the enableFocusTrap prop to enable focus trapping.">
        <Text as="p">Click the button below to open the dialog.</Text>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Toggle Dialog
        </button>
        <Dialog
          labelledById="stories-title"
          enableFocusTrap
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Box display="flex" alignItems="center" my="md" mx="lg">
            <Heading id="stories-title" scale={500} lineHeight="32px" m={0}>
              Focus Trap Example
            </Heading>
          </Box>
          <Box mb="lg" mx="lg">
            <Paragraph m={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen
              simplicia, vestra versuta.{' '}
              <a
                href="https://www.youtube.com/watch?v=DvKhRkE4VlY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quamquam tu hanc copiosiorem etiam soles dicere
              </a>
              . Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur
              haec: vacuitas doloris, divitiae, valitudo.
            </Paragraph>
          </Box>
        </Dialog>
      </SystemBlock>
    );
  },
  {
    notes: { markdown: readme }
  }
);
