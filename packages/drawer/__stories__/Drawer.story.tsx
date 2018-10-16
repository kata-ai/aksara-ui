import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import Button from '../../button/src/components/Button';

import Drawer from '../src/components/Drawer';
import DrawerHeader from '../src/components/DrawerHeader';
import DrawerBody from '../src/components/DrawerBody';
import DrawerFooter from '../src/components/DrawerFooter';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Drawer', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({
      propTables: [Drawer, DrawerHeader, DrawerBody, DrawerFooter]
    })
  );

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/drawer
# npm
npm install @kata-kit/drawer
~~~

## Usage

~~~jsx
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from '@kata-kit/drawer';

<>
  <Drawer isOpen={this.stateisOpen} onClose={() => this.setState({ isOpen: false })}>
    <DrawerHeader title="Drawer" />
    <DrawerBody>
      <p>Drawer Body</p>
    </DrawerBody>
    <DrawerFooter>
      <Button
        color="primary"
        onClick={() => this.setState({ isOpen: false })}
      >
        Close Drawer
      </Button>
    </DrawerFooter>
  </Drawer>
  <Button color="primary" onClick={() => this.setState({ isOpen: true })}>
    Open drawer
  </Button>
</>
~~~
`;

story.add(
  'Documentation',
  () => (
    <WithState initialState={{ isOpen: false }}>
      {({ isOpen }, { setState }) => (
        <div>
          <Drawer isOpen={isOpen} onClose={() => setState({ isOpen: false })}>
            <DrawerHeader title="Drawer" />
            <DrawerBody>
              <p>Drawer Body</p>
            </DrawerBody>
            <DrawerFooter>
              <Button
                color="primary"
                onClick={() => setState({ isOpen: false })}
              >
                Close Drawer
              </Button>
            </DrawerFooter>
          </Drawer>
          <Button color="primary" onClick={() => setState({ isOpen: true })}>
            Open drawer
          </Button>
        </div>
      )}
    </WithState>
  ),
  { info }
);
