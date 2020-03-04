import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import Message from './Message';
import { Stack } from '../../../foundations';

const readme = require('../README.md');

export default {
  title: 'Core|Components/Message',
  component: Message,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock
    title="Message"
    subtitle="Message blocks are used to convey important information to users."
    noBackground
  >
    <ComponentBlock title="Usage">
      <Stack spacing="sm">
        <Message message="Simple general message" />
        <Message message="Success message that only has 1 line" state="success" />
        <Message message="Informational message that only has 1 line" state="info" />
        <Message message="Error message that only has 1 line" state="error" />
        <Message message="Warning message that only has 1 line" state="warning" />
      </Stack>
    </ComponentBlock>
  </SystemBlock>
);

export const Closable = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SystemBlock title="Message" subtitle="Add an 'onClose' prop to add a close button handler">
      <ComponentBlock title="Usage">
        {isOpen ? (
          <Message
            message="Hey, no peeking! Close this banner by clicking that X button."
            state="warning"
            onClose={() => setIsOpen(false)}
          />
        ) : (
          <button type="button" onClick={() => setIsOpen(true)}>
            Toggle banner
          </button>
        )}
      </ComponentBlock>
    </SystemBlock>
  );
};
