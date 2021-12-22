import * as React from 'react';
import { Story } from '@storybook/react';

import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import OverlayScreen, { OverlayScreenProps } from './OverlayScreen';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import { Portal } from '../../portal';

export default {
  title: 'Core/Helpers/Overlay',
  component: OverlayScreen,
  argTypes: {
    backdropBlur: {
      control: 'boolean',
    },
  },
};
export const Example: Story<OverlayScreenProps> = ({ backdropBlur }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box p="md">
      <Text as="p">This will be blured if your browser support backdrop filter</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Open Overlay
      </button>
      <Portal>
        <Transition
          appear
          in={isOpen}
          timeout={{
            enter: 300,
            exit: 300,
          }}
          unmountOnExit
        >
          {state => (
            <OverlayScreen
              backdropBlur={backdropBlur}
              className={clsx(isOpen && 'entered')}
              data-state={state}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </Transition>
      </Portal>
    </Box>
  );
};
Example.args = {
  backdropBlur: true,
};
