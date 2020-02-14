import * as React from 'react';
import { IconTickRounded, IconInfo, IconWarningRounded, IconCloseRounded, IconClose } from '@kata-ai/aksara-icons';

import { BaseMessageProps, Root, Icon, Inner, CloseButton, MessageStates } from '../styles';
import { Text } from '../../../foundations';
import { messageIconVariants } from '../variants';

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
const Message: React.FC<MessageProps> = ({ className, style, message, state, onClose, ...rest }) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  const renderIconStates = () => {
    switch (state) {
      case 'general': {
        return null;
      }
      case 'success': {
        return <IconTickRounded aria-hidden="true" size={16} {...messageIconVariants[state]} />;
      }
      case 'info': {
        return <IconInfo aria-hidden="true" size={16} {...messageIconVariants[state]} />;
      }
      case 'warning': {
        return <IconWarningRounded aria-hidden="true" size={16} {...messageIconVariants[state]} />;
      }
      case 'error': {
        return <IconCloseRounded aria-hidden="true" size={16} {...messageIconVariants[state]} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Root className={className} style={style} state={state} {...rest}>
      {state !== 'general' && <Icon>{renderIconStates()}</Icon>}
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
          <IconClose size={16} aria-hidden="true" {...(state ? messageIconVariants[state] : {})} />
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
