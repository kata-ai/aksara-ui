import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface BoxHeaderProps extends Omit<BoxProps, 'children'> {
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'lg';
  title?: React.ReactNode;
  centerTitle?: boolean;
  backButton?: React.ReactNode;
  actions?: React.ReactNode;
  closeButton?: React.ReactNode;
}

const BoxHeader: React.FC<BoxHeaderProps> = ({
  title,
  centerTitle = false,
  actions,
  backButton,
  className,
  style,
  children,
  size = 'sm',
  closeButton,
  sx,
  ...rest
}) => {
  const boxHeaderStyle = useComponentStyles('boxHeader', { size });

  return (
    <Box sx={{ ...boxHeaderStyle, ...sx }} className={className} style={style} {...rest}>
      {backButton && <Box marginRight={'md'}>{backButton}</Box>}
      <Box display={'flex'} flex={1} justifyContent={centerTitle ? 'center' : 'flex-start'}>
        {title}
      </Box>
      {actions && <Box>{actions}</Box>}
      {closeButton && (
        <Box display={'flex'} position="absolute" right="24px">
          {closeButton}
        </Box>
      )}
    </Box>
  );
};

export default BoxHeader;
