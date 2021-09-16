import * as React from 'react';
import { Box } from '../../../layout';
import { Heading } from '../../../typography';

export interface DialogHeaderProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ id, className, style, children }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="column" pt="xl" px="xl" pb="md">
      <Box display="flex" flexDirection="row" alignItems="center" height={32}>
        <Heading id={id} scale={500} m={0}>
          {children}
        </Heading>
      </Box>
    </Box>
  );
};

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
