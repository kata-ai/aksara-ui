import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import { IconClose } from '@aksara-ui/icons';
import { Box, BoxProps } from '../../layout';
import { Text } from '../../typography';
import { useComponentStyles } from '../../system';
import { UnstyledButton } from '../button';
import { ToastSettings, ToastVariants } from './types';
import { ANIMATION_DURATION, TOASTER_WIDTH } from './internals/constants';

export interface ToastProps extends Omit<ToastSettings, 'status'>, BoxProps {
  variant?: ToastVariants;
}

const ToastEnter = keyframes`
  0% {
    right: -${TOASTER_WIDTH}px;
    opacity: 0;
  }

  100% {
    right: 0;
    opacity: 1;
  }
`;

const ToastExit = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
    max-height: 200px;
    margin-bottom: 20px;
  }

  40% {
    margin-bottom: 20px;
    max-height: 200px;
  }

  50% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
    max-height: 0;
    margin-bottom: 0;
  }
`;

const Root = styled('div')`
  display: block;
  width: ${TOASTER_WIDTH}px;
  height: 100%;
  position: relative;
  margin-bottom: 20px;
  opacity: 0;

  &[data-toaster-state='entering'],
  &[data-toaster-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ToastEnter};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-toaster-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ToastExit};
    animation-duration: ${ANIMATION_DURATION * 2}ms;
  }

  &[data-toaster-state='entered'] {
    right: 0;
    opacity: 1;
  }
`;

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  dismissible,
  dismissAfter = 5000,
  variant = 'default',
  allowHTML = false,
  onAction,
  actionText = 'Action',
  onRemove,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toastInnerStyles = useComponentStyles('toastInner', { variant });
  const toastCloseButtonStyles = useComponentStyles('toastCloseButton');

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  React.useEffect(() => {
    let currentTimer: NodeJS.Timeout | null = null;
    setIsOpen(true);

    currentTimer = setTimeout(() => {
      close();
    }, dismissAfter);

    return () => {
      if (currentTimer) {
        clearTimeout(currentTimer);
      }
    };
  }, [dismissAfter]);

  return (
    <Transition
      appear
      in={isOpen}
      timeout={{
        enter: ANIMATION_DURATION + 100,
        exit: ANIMATION_DURATION + 400,
      }}
      unmountOnExit
      onExited={onRemove}
    >
      {state => (
        <Root id={id} data-toaster-state={state} {...rest}>
          <Box sx={toastInnerStyles}>
            {allowHTML && message ? (
              <Box
                display="flex"
                alignItems="center"
                flex="1 1 auto"
                minHeight={18}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            ) : (
              <Box display="flex" alignItems="center" flex="1 1 auto" minHeight={18}>
                <Text display="block" scale={200}>
                  {message}
                </Text>
              </Box>
            )}
            {onAction && (
              <Box display="flex" ml="md">
                <UnstyledButton
                  type="button"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="12px"
                  lineHeight="18px"
                  onClick={() => {
                    if (onAction) {
                      onAction();
                    }
                    close();
                  }}
                  textDecoration="underline"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {actionText}
                </UnstyledButton>
              </Box>
            )}
            {dismissible && (
              <Box display="flex" alignItems="start" minHeight={18} ml="md">
                <UnstyledButton
                  type="button"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={toastCloseButtonStyles}
                  onClick={() => close()}
                >
                  <IconClose aria-hidden fill="currentColor" size={16} />
                </UnstyledButton>
              </Box>
            )}
          </Box>
        </Root>
      )}
    </Transition>
  );
};

export default Toast;
