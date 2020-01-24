/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';

import { WicaraProvider } from '../../foundations/reset';
import StorybookGlobal from './StorybookGlobal';

import '../../../../wicara-fonts/kata-icons.css';
import '../../../../wicara-fonts/museo-sans-rounded.css';

const SystemWrapper: DecoratorFn = storyFn => (
  <WicaraProvider>
    <StorybookGlobal />
    {storyFn()}
  </WicaraProvider>
);

export default SystemWrapper;
