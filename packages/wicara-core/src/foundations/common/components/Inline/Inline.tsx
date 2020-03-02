import * as React from 'react';

import { Space } from '../../../../Theme';
import { Box, BoxProps } from '../../../box';

export interface InlineProps extends Omit<BoxProps, 'color'> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  spacing?: Space;
}

const Inline: React.FC<InlineProps> = ({ children, spacing, ...rest }) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box {...rest}>
      <Box display="flex" flexWrap="wrap" alignItems="flex-start">
        {validChildrenArray.map(child => {
          const spacingProps = { display: 'block', mb: spacing, mr: spacing, mt: 0, ml: 0 };
          return <Box {...spacingProps}>{child}</Box>;
        })}
      </Box>
    </Box>
  );
};

Inline.displayName = 'Inline';

export default Inline;
