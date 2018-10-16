import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Button from '../src/components/Button';
import FloatingButton from '../src/components/FloatingButton';
import SupportButton from '../src/components/SupportButton';
import ToggleButton from '../src/components/ToggleButton';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components/Button', module).addDecorator(StoryWrapper);

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/button
# npm
npm install @kata-kit/button
~~~

## Usage

~~~jsx
import { Button } from 'kata-kit/button';

<Button>Push Me</Button>
~~~
`;

story.add(
  'Documentation',
  wInfo(info)(() => (
    <div>
      <Button color="primary" onClick={action('button-click')}>
        Push Me
      </Button>{' '}
      <Button color="primary" disabled onClick={action('button-click')}>
        I'm disabled
      </Button>{' '}
      <Button color="primary" loading onClick={action('button-click')}>
        Loading...
      </Button>
    </div>
  ))
);

story.add(
  'FloatingButton',
  wInfo(`
## Usage

~~~javascript
<FloatingButton icon="bot" />
~~~
`)(() => (
    <div>
      <FloatingButton icon="bot" />
      <FloatingButton icon="bot" disabled />{' '}
      <FloatingButton icon="bot" isLoading />{' '}
    </div>
  ))
);

story.add(
  'SupportButton',
  wInfo(`
## Usage

~~~javascript
<SupportButton active>Push Me</SupportButton>
~~~
`)(() => (
    <div>
      <SupportButton active onClick={action('floating-button-click')}>
        Support Button
      </SupportButton>{' '}
      <SupportButton isIcon onClick={action('floating-button-click')}>
        <i className="icon-bot" />
      </SupportButton>{' '}
      <SupportButton loading onClick={action('floating-button-click')}>
        Support Button
      </SupportButton>{' '}
    </div>
  ))
);

story.add('Button Styles', () => (
  <div>
    <div style={{ marginBottom: '8px' }}>
      <Button color="primary">Primary</Button>{' '}
      <Button color="secondary">Secondary</Button>{' '}
      <Button color="success">Success</Button>{' '}
      <Button color="warning">Warning</Button>{' '}
      <Button color="danger">Danger</Button>{' '}
      <Button color="white">White</Button>
    </div>
    <div>
      <Button color="primary" block>
        Block button
      </Button>
    </div>
  </div>
));

story.add(
  'ToggleButton',
  withState({ active: false })(({ store }) => (
    <div>
      <h1>ToggleButton</h1>
      <p>
        The <code>{`<ToggleButton />`}</code> is a special helper component to
        render different button states on components with toggle states.
      </p>
      <div style={{ marginBottom: '8px' }}>
        <ToggleButton
          {...store.state}
          onToggle={() => {
            store.set({ active: !store.state.active });
          }}
          renderActive={() => <Button>Deactivate</Button>}
          renderInactive={() => <Button color="primary">Activate</Button>}
        />
      </div>
      <div>
        <span>
          <strong>Sentinel forces:</strong>{' '}
          {store.state.active ? 'Activated' : 'Deactivated'}
        </span>
      </div>
    </div>
  ))
);
