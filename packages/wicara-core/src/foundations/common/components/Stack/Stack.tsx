/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import { Space } from '../../../../Theme';
import { Box, BoxProps } from '../../../box';

export interface StackProps extends Omit<BoxProps, 'color'> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  spacing?: Space;
}

const Stack: React.FC<StackProps> = ({ children, spacing, ...rest }) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box {...rest}>
      {validChildrenArray.map((child, i) => {
        const isLastChild = validChildrenArray.length === i + 1;
        const spacingProps = { mb: isLastChild ? undefined : spacing };
        return (
          <Box key={`stack-child-${i}`} {...spacingProps}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

Stack.displayName = 'Stack';

export default Stack;
