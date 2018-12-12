import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import Board from '@kata-kit/common/src/Board';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Common/Board', module).addDecorator(
  StoryWrapper
);

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/common
# npm
npm install @kata-kit/common
~~~

## Usage

~~~jsx
import { Board } from '@kata-kit/common';

<Board>Push Me</Board>
~~~
`;

story.addDecorator(wInfo()).add(
  'Documentation',
  () => (
    <Board>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas?
      Illa tamen simplicia, vestra versuta.{' '}
      <a href="https://www.youtube.com/watch?v=qTUnDV3MgVQ" target="_blank">
        Quamquam tu hanc copiosiorem etiam soles dicere.
      </a>{' '}
      Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei
      videantur haec: vacuitas doloris, divitiae, valitudo.
    </Board>
  ),
  { info }
);
