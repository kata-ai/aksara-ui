import * as React from 'react';
import { setAddon, storiesOf, StoryDecorator } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import JSXAddon from 'storybook-addon-jsx';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Button from '../../button/src/components/Button';

import Drawer from '../src/components/Drawer';
import DrawerHeader from '../src/components/DrawerHeader';
import DrawerBody from '../src/components/DrawerBody';
import DrawerFooter from '../src/components/DrawerFooter';

setAddon(JSXAddon);

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components/Drawer', module).addDecorator(StoryWrapper);

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
  'basic',
  wInfo(info, { propTables: [Drawer, DrawerHeader, DrawerBody, DrawerFooter] })(
    withState({ isOpen: false })(({ store }) => (
      <>
        <Drawer
          isOpen={store.state.isOpen}
          onClose={() => store.set({ isOpen: false })}
        >
          <DrawerHeader title="Drawer" />
          <DrawerBody>
            <p>Drawer Body</p>
          </DrawerBody>
          <DrawerFooter>
            <Button
              color="primary"
              onClick={() => store.set({ isOpen: false })}
            >
              Close Drawer
            </Button>
          </DrawerFooter>
        </Drawer>
        <Button color="primary" onClick={() => store.set({ isOpen: true })}>
          Open drawer
        </Button>
      </>
    ))
  )
);
