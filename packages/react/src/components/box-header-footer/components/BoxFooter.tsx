import * as React from 'react';
import { Text } from '../../../typography';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface BoxFooterProps extends Omit<BoxProps, 'children'> {
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  caption?: string;
  actions?: React.ReactNode;
}

const BoxFooter: React.FC<BoxFooterProps> = ({
  caption,
  actions,
  className,
  style,
  children,
  size = 'sm',
  sx,
  ...rest
}) => {
  const boxFooterStyle = useComponentStyles('boxFooter', { size });
  return (
    <Box sx={{ ...boxFooterStyle, ...sx }} className={className} style={style} {...rest}>
      {caption && (
        <Box marginRight={'md'}>
          <Text as="p" scale={200} color="greymed04">
            {caption}
          </Text>
        </Box>
      )}
      {actions && (
        <Box display={'flex'} flex="1" justifyContent={'flex-end'}>
          {actions}
        </Box>
      )}
    </Box>
  );
};

export default BoxFooter;
