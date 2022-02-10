import * as React from 'react';
import { BaseMessageBoxProps, InboundMessageBoxProps, MessageBox, OutboundMessageBoxProps } from './MessageBox';
import { TextMessage } from './TextMessage';

// eslint-disable-next-line no-shadow
enum MessageTypeValue {
  text = 'text',
  image = 'image',
  video = 'video',
  audio = 'audio',
  doc = 'doc',
  url = 'url',
}
export type MessageType = `${MessageTypeValue}`;

export interface BaseChatProps extends BaseMessageBoxProps {
  type: MessageType;
  data: {
    message?: string;
    attachment?: {
      url?: string;
      file?: File;
    };
  }; // data based on message type
}
export interface InboundChat extends BaseChatProps, InboundMessageBoxProps {}
export interface OutboundChat extends BaseChatProps, OutboundMessageBoxProps {}
export type ChatProps = InboundChat | OutboundChat;
// eslint-disable-next-line import/prefer-default-export
export const Chat = ({ type, data, ...rest }: ChatProps) => {
  switch (type) {
    case MessageTypeValue.text: {
      return (
        <MessageBox {...rest}>
          <TextMessage variant={rest.variant}>{data.message}</TextMessage>
        </MessageBox>
      );
    }
    default:
      return null;
  }
};
