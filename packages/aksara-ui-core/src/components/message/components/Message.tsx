import * as React from 'react';
import {
  IconTickRounded,
  IconInfo,
  IconWarningRounded,
  IconCloseRounded,
  IconClose,
  IconConversation,
} from '@aksara-ui/icons';

import { BaseMessageProps, Root, Icon, Inner, CloseButton, MessageStates } from '../styles';
import { Heading, Paragraph } from '../../../foundations';
import { messageIconVariants, closeButtonVariants } from '../variants';

export interface MessageProps extends BaseMessageProps {
  /** Message box content. Could be a string or a `ReactNode`. */
  message: string | React.ReactNode;
  /** Message title. */
  title?: string;
  /** Additional CSS classes to give to the banner. */
  className?: string;
  /** Additional CSS properties to give to the banner. */
  style?: React.CSSProperties;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

/** Banners are used to convey important information to users. */
const Message: React.FC<MessageProps> = ({ className, style, title, message, state, onClose, ...rest }) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  const renderIconStates = () => {
    switch (state) {
      case 'general': {
        return <IconConversation aria-hidden="true" size={24} {...messageIconVariants[state]} />;
      }
      case 'success': {
        return <IconTickRounded aria-hidden="true" size={24} {...messageIconVariants[state]} />;
      }
      case 'info': {
        return <IconInfo aria-hidden="true" size={24} {...messageIconVariants[state]} />;
      }
      case 'warning': {
        return <IconWarningRounded aria-hidden="true" size={24} {...messageIconVariants[state]} />;
      }
      case 'error': {
        return <IconCloseRounded aria-hidden="true" size={24} {...messageIconVariants[state]} />;
      }
      default: {
        return null;
      }
    }
  };

  const renderMessage = () => {
    if (typeof message === 'function') {
      return message;
    }

    return (
      <Paragraph display="inline-block" scale={300} m={0}>
        {message}
      </Paragraph>
    );
  };

  return (
    <Root className={className} style={style} state={state} {...rest}>
      <Icon>{renderIconStates()}</Icon>
      <Inner>
        {title ? (
          <Heading as="h4" mb="sm" scale={400} fontWeight={600}>
            {title}
          </Heading>
        ) : null}
        {renderMessage()}
      </Inner>
      {onClose && (
        <CloseButton
          type="button"
          aria-label="Close"
          data-testid="Banner-closeButton"
          onClick={handleClose}
          state={state}
        >
          <IconClose size={24} aria-hidden="true" {...(state ? closeButtonVariants[state] : {})} />
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
