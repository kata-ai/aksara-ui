import * as React from 'react';

import { WicaraProvider } from '../../foundations/reset';
import StorybookGlobal from './StorybookGlobal';

import '../../../../wicara-fonts/kata-icons.css';
import '../../../../wicara-fonts/museo-sans-rounded.css';

const SystemWrapper = (storyFn: () => any) => (
  <WicaraProvider>
    <StorybookGlobal />
    {storyFn()}
  </WicaraProvider>
);

export default SystemWrapper;
