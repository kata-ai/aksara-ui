/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';

import { AksaraProvider } from '../../foundations/theme';

import '../../../../aksara-fonts/kata-icons.css';
import '../../../../aksara-fonts/objective.css';

const SystemWrapper: DecoratorFn = storyFn => <AksaraProvider>{storyFn()}</AksaraProvider>;

export default SystemWrapper;
