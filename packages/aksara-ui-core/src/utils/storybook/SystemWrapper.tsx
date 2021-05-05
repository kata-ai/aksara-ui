/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { AksaraProvider } from '../../aksara-provider';

import 'typeface-inter';

const SystemWrapper: DecoratorFn = storyFn => <AksaraProvider>{storyFn()}</AksaraProvider>;

export default SystemWrapper;
