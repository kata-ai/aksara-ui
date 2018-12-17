import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import Card from '@kata-kit/card/src/Card';
import Avatar from '@kata-kit/avatar/src/components/Avatar';
import Button from '@kata-kit/button/src/components/Button';
import CardGrid from '@kata-kit/card/src/CardGrid';
import CardButton from '@kata-kit/card/src/CardButton';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Card', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Card, CardButton, CardGrid] }));

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
  'DashboardCards',
  () => (
    <CardGrid>
      <Card asButton>
        <CardButton label={'Create'} icon="add" />
      </Card>
      <Card
        title="Second Card"
        avatarComponent={
          <Avatar src="https://picsum.photos/350/150/?image=821" />
        }
        action={
          <Button color="secondary" isIcon>
            <i className="icon-more" />
          </Button>
        }
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Card>
      <Card title="Third Card">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </Card>
    </CardGrid>
  ),
  {
    info: {
      text: `
      ## Usage

      ~~~javascript
      <CardGrid>
      <DashboardCard title="First Card">
        Card content
      </DashboardCard>
      <DashboardCard title="Second Card">
        Card content
      </DashboardCard>
      <DashboardCard title="Third Card">
        Card content
      </DashboardCard>
      </CardGrid>
      ~~~
      `,
      propTables: [CardButton, CardGrid]
    }
  }
);
