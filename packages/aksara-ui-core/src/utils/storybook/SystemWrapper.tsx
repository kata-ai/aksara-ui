/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';

import { AksaraProvider, GlobalStyles } from '../../foundations/theme';

import '../../../../aksara-fonts/kata-icons.css';
import 'typeface-inter';

const SystemWrapper: DecoratorFn = storyFn => (
  <AksaraProvider>
    <GlobalStyles />
    {storyFn()}
  </AksaraProvider>
);

export default SystemWrapper;
