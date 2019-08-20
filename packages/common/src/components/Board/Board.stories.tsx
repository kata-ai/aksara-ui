import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../../.storybook/components/Wrapper';

import { Board } from './index';

const readme = require('../../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Common/Board', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <Board>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas?
        Illa tamen simplicia, vestra versuta.{' '}
        <a href="https://www.youtube.com/watch?v=qTUnDV3MgVQ" target="_blank">
          Quamquam tu hanc copiosiorem etiam soles dicere.
        </a>{' '}
        Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane
        ei videantur haec: vacuitas doloris, divitiae, valitudo.
      </Board>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
