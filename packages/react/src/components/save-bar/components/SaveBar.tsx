import * as React from 'react';
import { Transition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { Box, BoxProps } from '../../../layout';
import { Text } from '../../../typography';
import { useComponentStyles } from '../../../system';
import { Portal } from '../../../helpers';

const EnterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LeaveAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

const SaveBarContainer = styled(Box)`
  &[data-state='entering'],
  &[data-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${EnterAnimation};
    animation-duration: 300ms;
  }

  &[data-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${LeaveAnimation};
    animation-duration: 300ms;
  }
`;
export interface SaveBarProps extends BoxProps {
  /** set label of savebar  */
  label: string;
  /** set icon of savebar  */
  icon?: React.ReactNode;
  /** render actions */
  actions: React.ReactNode;
  /** Set max width of content */
  maxWidth: string | number;
  /**  */
  isShow: boolean;
}

const SaveBar: React.FC<SaveBarProps> = ({ label, icon, actions, maxWidth, sx, isShow, ...rest }) => {
  const savebarStyle = useComponentStyles('saveBarBase');
  return (
    <Portal>
      <Transition
        appear
        in={isShow}
        timeout={{
          enter: 300,
          exit: 300,
        }}
        unmountOnExit
      >
        {state => {
          return (
            <SaveBarContainer data-state={state} sx={{ ...savebarStyle, ...sx }} {...rest}>
              <Box display={'flex'}>{icon}</Box>
              <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                <Box
                  display={'flex'}
                  alignItems="center"
                  maxWidth={maxWidth}
                  width="100%"
                  justifyContent="space-between"
                >
                  <Text color="greylight01" scale={400}>
                    {label}
                  </Text>
                  <Box>{actions}</Box>
                </Box>
              </Box>
            </SaveBarContainer>
          );
        }}
      </Transition>
    </Portal>
  );
};

export default SaveBar;
