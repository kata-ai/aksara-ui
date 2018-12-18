import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import Card from '@kata-kit/card/src/Card';
import CardButton from '@kata-kit/card/src/CardButton';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Card', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Card, CardButton] }));

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/card
# npm
npm install @kata-kit/card
~~~

## Usage

~~~javascript
import { Card } from 'kata-kit/card';

<Card title="Title">Card content</Card>
~~~
`;

story.add(
  'Documentation',
  () => (
    <Card title="Sample Card">Cards are used for UI elements with text.</Card>
  ),
  {
    info: {
      text: info,
      propTables: [Card]
    }
  }
);

story.add(
  'CardButton',
  () => (
    <Card asButton>
      <CardButton label="Add Content" icon="add" />
    </Card>
  ),
  {
    info: { disable: true }
  }
);
