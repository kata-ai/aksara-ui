import * as React from 'react';
import { Box } from '../../../../layout';
import { Text } from '../../../../typography';
import { useComponentStyles } from '../../../../system';

export type BaseMessageVariant = 'inbound' | 'outbound';

export interface BaseMessageProps {
  variant: BaseMessageVariant;
  time?: Date;
  read?: boolean;
  like?: boolean;
}

export const BaseMessage: React.FC<BaseMessageProps> = ({ children, variant, time, read }) => {
  const BaseStyle = useComponentStyles('Base', { variant });
  const timeLabelStyle = useComponentStyles('timeLabel', { variant });

  return (
    <Box sx={BaseStyle}>
      <Box>{children}</Box>
      {time && (
        <Text
          fontSize={10}
          lineHeight={16}
          fontWeight={400}
          sx={timeLabelStyle}
        >{`${time.getHours}:${time.getMinutes}`}</Text>
      )}
      {read && 'tes'}
    </Box>
  );
};
