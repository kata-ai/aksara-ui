// TODO
// container for message
// handle like UI
// type will be used as extended type for other type of message
// so other message will be derived the props just like `like status`

/**
 * props
 *
 * like statue
 * time - absolute bottor right corner
 */

import { IconTickSingle, IconTickDouble, IconWarningRounded } from '@aksara-ui/icons';
import * as React from 'react';
import { Box } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { LoveIcon } from '../icon/LoveIcon';

export type MessageVariant = 'inbound' | 'outbound';

// eslint-disable-next-line no-shadow
enum MessageStatusEnum {
  read = 'read',
  sent = 'sent',
  pending = 'pending',
  error = 'error',
}

export type MessageStatus = `${MessageStatusEnum}`;

export interface BaseMessageBoxProps {
  like?: boolean;
  time: Date;
}

export interface InboundMessageBoxProps extends BaseMessageBoxProps {
  variant: 'inbound';
}

export interface OutboundMessageBoxProps extends BaseMessageBoxProps {
  variant: 'outbound';
  messageStatus: MessageStatus;
}

export type MessageBoxProps = InboundMessageBoxProps | OutboundMessageBoxProps;

// eslint-disable-next-line import/prefer-default-export
export const MessageBox: React.FC<MessageBoxProps> = props => {
  const { children, variant, like, time } = props;
  const conversationMessageBoxStyle = useComponentStyles('conversationMessageBox', { variant });
  const conversationLikeStyle = useComponentStyles('conversationLike', { variant });
  const conversationTimeStyle = useComponentStyles('conversationTime', { variant });

  const readStatus = () => {
    if (props.variant === 'outbound') {
      const { messageStatus } = props;
      let messageStatusIcon;
      switch (messageStatus) {
        case MessageStatusEnum.read: {
          messageStatusIcon = <IconTickDouble aria-hidden fill="#006FE6" size={16} />;
          break;
        }
        case MessageStatusEnum.sent: {
          messageStatusIcon = <IconTickDouble aria-hidden fill="#6A7A8A" size={16} />;
          break;
        }
        case MessageStatusEnum.pending: {
          messageStatusIcon = <IconTickSingle aria-hidden fill="#6A7A8A" size={16} />;
          break;
        }
        case MessageStatusEnum.error: {
          messageStatusIcon = <IconWarningRounded size={16} aria-hidden fill="#FF6150" />;
          break;
        }
        default:
          break;
      }
      return (
        <Box position={'absolute'} right={8} bottom={8} display={'inline-block'} width={16} height={16}>
          {messageStatusIcon}
        </Box>
      );
    }
    return null;
  };
  const formatTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const AmPm = hours >= 12 ? 'AM' : 'PM';
    let formatHours = hours % 12;
    formatHours = formatHours === 0 ? 12 : formatHours;
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formatHours}:${formatMinutes} ${AmPm}`;
  };

  return (
    <Box sx={conversationMessageBoxStyle}>
      {children}
      {like && (
        <Box sx={conversationLikeStyle}>
          <LoveIcon aria-hidden fill="#FF6150" size={12} />
        </Box>
      )}
      <Box sx={conversationTimeStyle}>{formatTime()}</Box>
      {readStatus()}
    </Box>
  );
};
