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

import * as React from 'react';
import { Box } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { LoveIcon } from '../LoveIcon';

export type MessageVariant = 'inbound' | 'outbound';

export interface BaseMessageBoxProps {
  like?: boolean;
  time: Date;
}

export interface InboundMessageBoxProps extends BaseMessageBoxProps {
  variant: 'inbound';
}

export interface OutboundMessageBoxProps extends BaseMessageBoxProps {
  variant: 'outbound';
  read: boolean;
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
      const { read } = props;
      if (read) {
        return (
          <Box position={'absolute'} right={0} bottom={8} display={'inline-block'} width={16} height={16}>
            v
          </Box>
        );
      }
      return (
        <Box position={'absolute'} right={0} bottom={8} display={'inline-block'} width={16} height={16}>
          v
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
