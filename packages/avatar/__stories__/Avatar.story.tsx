import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Avatar from '../src/components/Avatar';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Avatar', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Avatar] }));

const infoText = `
## Install

~~~sh
# yarn
yarn add @kata-kit/avatar
# npm
npm install @kata-kit/avatar
~~~

## Usage

~~~jsx
import { Badge } from '@kata-kit/badge';

<Avatar src="" />
~~~
`;

(story as any).add(
  'Documentation',
  () => (
    <div>
      <Avatar size={24} src="https://picsum.photos/400/400/?image=225" />
      <Avatar size={40} src="https://picsum.photos/600/400/?image=777" />
    </div>
  ),
  { info: { text: infoText } }
);

(story as any).add(
  'Examples',
  () => (
    <div>
      <h1>Examples</h1>
      <Avatar size={40} src="https://picsum.photos/600/400/?image=777" />
    </div>
  ),
  {
    info: { disable: true }
  }
);
