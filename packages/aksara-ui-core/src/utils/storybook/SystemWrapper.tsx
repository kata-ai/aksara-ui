/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { AksaraProvider } from '../../foundations';

import 'typeface-inter';

const SystemWrapper: DecoratorFn = storyFn => <AksaraProvider>{storyFn()}</AksaraProvider>;

export default SystemWrapper;
