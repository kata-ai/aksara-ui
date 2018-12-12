import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import Avatar from '@kata-kit/avatar/src/components/Avatar';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Avatar', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Avatar] }))
  .addDecorator(withKnobs);

const avatarSizeOptions = {
  Small: 24,
  Large: 40
};

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
import { Avatar } from '@kata-kit/avatar';

<Avatar src="" />
~~~
`;

(story as any).add(
  'Documentation',
  () => (
    <div>
      <Avatar size={24} src="https://picsum.photos/400/400/?image=225" />{' '}
      <Avatar size={40} src="https://picsum.photos/600/400/?image=777" />
    </div>
  ),
  { info: { text: infoText } }
);

(story as any).add(
  'Examples',
  () => (
    <Avatar
      size={select('Size', avatarSizeOptions, 40)}
      src={text('Message', 'https://picsum.photos/600/400/?image=777')}
    />
  ),
  {
    info: { disable: true }
  }
);
