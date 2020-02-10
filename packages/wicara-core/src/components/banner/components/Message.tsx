import * as React from 'react';

import { BaseMessageProps, Root, Icon, Inner, CloseButton, MessageStates } from '../styles';
import { Text } from '../../../foundations';

export interface MessageProps extends BaseMessageProps {
  /** Banner message. Could be a string or a `ReactNode`. */
  message: string;
  /** Additional CSS classes to give to the banner. */
  className?: string;
  /** Additional CSS properties to give to the banner. */
  style?: React.CSSProperties;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

/** Banners are used to convey important information to users. */
const Message: React.FC<MessageProps> = ({ className, style, message, state, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  return (
    <Root className={className} style={style} state={state}>
      {state !== 'general' && (
        <Icon>
          <i className={`icon-${state}`} />
        </Icon>
      )}
      <Inner>
        <Text display="inline-block" scale={200} fontWeight={500}>
          {message}
        </Text>
      </Inner>
      {onClose && (
        <CloseButton
          type="button"
          aria-label="Close"
          data-testid="Banner-closeButton"
          onClick={handleClose}
          state={state}
        >
          <i className="icon-close" aria-hidden="true" />
        </CloseButton>
      )}
    </Root>
  );
};

Message.defaultProps = {
  state: 'general',
};

Message.displayName = 'Message';

export default Message;
export { MessageStates };

/** @deprecated - use `Message` instead */
export const Banner = Message;
