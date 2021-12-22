import { IconClose } from '@aksara-ui/icons';
import * as React from 'react';
import { UnstyledButton } from '../../button/components/UnstyledButton';

export interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <UnstyledButton
      type="button"
      aria-label="Close"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        color: 'greydark02',
        '&:focus': {
          outline: 'none',
          borderRadius: 4,
          boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
        },
      }}
      onClick={onClick}
    >
      <IconClose aria-hidden size={24} fill="currentColor" />
    </UnstyledButton>
  );
};

export default CloseButton;
