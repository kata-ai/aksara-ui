import * as React from 'react';
import { Transition } from 'react-transition-group';
import { IconClose } from '@aksara-ui/icons';
import { Box, BoxProps, Text } from '../../layout';
import { useComponentStyles } from '../../system';
import { UnstyledButton } from '../button';
import { ToastSettings, ToastVariants } from './types';
import { ANIMATION_DURATION } from './constants';

export interface ToastProps extends Omit<ToastSettings, 'status'>, BoxProps {
  variant?: ToastVariants;
}

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  dismissible,
  dismissAfter = 15000,
  variant = 'default',
  allowHTML = false,
  onAction,
  actionText = 'Action',
  onRemove,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toastBaseStyles = useComponentStyles('toastBase', { variant });
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
        exit: ANIMATION_DURATION + 100,
      }}
      unmountOnExit
      onExited={onRemove}
    >
      {state => (
        <Box id={id} sx={toastBaseStyles} data-toaster-state={state} {...rest}>
          {allowHTML && message ? (
            <Box
              display="flex"
              alignItems="center"
              flex="1 1 auto"
              minHeight={24}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          ) : (
            <Box display="flex" alignItems="center" flex="1 1 auto" minHeight={24}>
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
                lineHeight="20px"
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
            <Box display="flex" height={24} ml="md">
              <UnstyledButton
                type="button"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                sx={toastCloseButtonStyles}
                onClick={() => close()}
              >
                <IconClose aria-hidden fill="currentColor" />
              </UnstyledButton>
            </Box>
          )}
        </Box>
      )}
    </Transition>
  );
};

export default Toast;
