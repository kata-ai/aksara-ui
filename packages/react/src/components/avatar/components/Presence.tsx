import * as React from 'react';
import { Box } from '../../../layout/box';
import { useComponentStyles } from '../../../system';

export type PresencePositionType = 'top' | 'bottom';
export type PresenceSizeType = 'sm' | 'md' | 'lg' | 'xl';
export interface PresenceProps {
  label: string;
  position: PresencePositionType;
  size?: PresenceSizeType;
}

const Presence = ({ size, position = 'top', label }: PresenceProps) => {
  const presenceStyle = useComponentStyles('avatarPresence', { size, position });
  return <Box sx={presenceStyle}>{label}</Box>;
};
export default Presence;
