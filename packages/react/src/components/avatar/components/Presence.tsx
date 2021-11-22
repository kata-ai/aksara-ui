import * as React from 'react';
import { Box } from '../../../layout';
import { CSSObject, useComponentStyles } from '../../../system';

export interface PresenceProps {
  label: string;
  position: 'top' | 'bottom';
  size?: 'sm' | 'md';
}

const Presence = ({ size, position = 'top', label }: PresenceProps) => {
  const presenceStyle = useComponentStyles('avatarPresence', { size, position });
  const expandWidth: CSSObject =
    label.length >= 3
      ? {
          paddingRight: '4px',
          paddingLeft: '4px',
        }
      : {};
  return <Box sx={{ ...presenceStyle, ...expandWidth }}>{label}</Box>;
};
export default Presence;
