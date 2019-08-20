import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';
import WithState from '../../../../.storybook/components/WithState';

import Button from './Button';
import ToggleButton from './ToggleButton';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Button/ToggleButton', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <WithState initialState={{ active: false }}>
        {({ active }, { setState }) => (
          <div>
            <h1>ToggleButton</h1>
            <p>
              The <code>{`<ToggleButton />`}</code> is a special helper
              component to render different button states on components with
              toggle states.
            </p>
            <div style={{ marginBottom: '8px' }}>
              <ToggleButton
                active={active}
                onToggle={() => setState({ active: !active })}
                renderActive={() => <Button>Deactivate</Button>}
                renderInactive={() => <Button color="primary">Activate</Button>}
              />
            </div>
            <div>
              <span>
                <strong>Sentinel forces:</strong>{' '}
                {active ? 'Activated' : 'Deactivated'}
              </span>
            </div>
          </div>
        )}
      </WithState>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
