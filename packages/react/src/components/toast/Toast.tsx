import * as React from 'react';
import { Transition } from 'react-transition-group';
import { Box, Text } from '../../layout';
import { useComponentStyles } from '../../system';
import { ToastSettings, ToastVariants } from './types';
import { ANIMATION_DURATION } from './constants';

export interface ToastProps extends Omit<ToastSettings, 'status'> {
  variant?: ToastVariants;
}

const Toast: React.FC<ToastProps> = ({ id, message, dismissAfter, variant = 'default', onRemove }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toastBaseStyles = useComponentStyles('toastBase', { variant });

  const close = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    let currentTimer: NodeJS.Timeout | null = null;

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
        <Box id={id} sx={toastBaseStyles} data-toaster-state={state}>
          <Box display="flex" alignItems="flex-start">
            <Box>
              <Text scale={200}>
                {id} &mdash; {message}
              </Text>
            </Box>
            <Box ml="md">
              <button type="button" onClick={() => close()}>
                close
              </button>
            </Box>
          </Box>
        </Box>
      )}
    </Transition>
  );
};

export default Toast;
