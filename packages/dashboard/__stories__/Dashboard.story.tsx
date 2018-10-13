import * as React from 'react';
import { setAddon, storiesOf, StoryDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import RootWrapper from '../../../.storybook/components/Wrapper';

import { Dashboard } from '../src';

setAddon(JSXAddon);

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper noPadding>{storyFn()}</RootWrapper>
);

const story = storiesOf('Layout/Dashboard', module).addDecorator(StoryWrapper);

story.addWithJSX('default', () => (
  <Dashboard title="kata-kit Demo">DashboardContent</Dashboard>
));

story.addWithJSX('starter', () => (
  <Dashboard
    isStarter
    title="kata-kit Demo"
    headerContent={
      <p>
        This project is intended to test the look and feel of the kata-kit
        component, as well as a development environment.
      </p>
    }
  >
    DashboardContent
  </Dashboard>
));
