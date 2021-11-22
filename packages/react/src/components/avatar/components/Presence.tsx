import * as React from 'react';
import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface PresenceProps {
  label: React.ReactNode;
  position: 'top' | 'bottom';
  size?: 'sm' | 'md';
}

const Presence = ({ size, position = 'top', label }: PresenceProps) => {
  const presenceStyle = useComponentStyles('avatarPresence', { size, position });

  return (
    <Box position="absolute" right="0" sx={presenceStyle}>
      {label}
    </Box>
  );
};
export default Presence;
