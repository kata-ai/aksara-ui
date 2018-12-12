import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '@storybook-utils/utils/wInfo';
import Wrapper from '@storybook-utils/components/Wrapper';

import Card from '@kata-kit/card/src/Card';
import Avatar from '@kata-kit/avatar/src/components/Avatar';
import Button from '@kata-kit/button/src/components/Button';
import DashboardCard from '@kata-kit/card/src/DashboardCard';
import CardGrid from '@kata-kit/card/src/CardGrid';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Card', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Card, CardGrid, DashboardCard] }));

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
  'DashboardCard',
  () => (
    <DashboardCard title="Second Card">
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </DashboardCard>
  ),
  {
    info: {
      text: `
      ## Usage

      ~~~javascript
      <DashboardCard title="Title">Card content</DashboardCard>
      ~~~
      `,
      propTables: [DashboardCard]
    }
  }
);

story.add(
  'CardGrid',
  () => (
    <CardGrid>
      <DashboardCard title="First Card">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </DashboardCard>
      <DashboardCard
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
      </DashboardCard>
      <DashboardCard title="Third Card">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </DashboardCard>
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
      propTables: [CardGrid]
    }
  }
);
