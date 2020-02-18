/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';

import { WicaraProvider } from '../../foundations/reset';

import '../../../../aksara-fonts/kata-icons.css';
import '../../../../aksara-fonts/museo-sans-rounded.css';

const SystemWrapper: DecoratorFn = storyFn => <WicaraProvider>{storyFn()}</WicaraProvider>;

export default SystemWrapper;
