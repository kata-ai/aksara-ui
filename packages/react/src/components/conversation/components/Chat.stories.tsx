import { Story } from '@storybook/react';
import * as React from 'react';
import { Chat, OutboundChat } from './chat/Chat';

export default {
  title: 'Core/Components/Conversation',
  components: Chat,
  argTypes: {
    variant: {
      options: ['inbound', 'outbound'],
      control: { type: 'radio' },
    },
    messageStatus: {
      options: ['read', 'sent', 'pending', 'error'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MessageText: Story<OutboundChat> = props => {
  return <Chat {...props} />;
};

MessageText.args = {
  type: 'text',
  like: true,
  data: { message: 'Hello World' },
  time: new Date(),
  variant: 'outbound',
  user: {
    name: 'Rahmad ',
  },
  messageStatus: 'read',
};
