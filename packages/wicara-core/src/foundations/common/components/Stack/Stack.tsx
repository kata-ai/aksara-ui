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
      {validChildrenArray.map((child, index) => {
        const isLastChild = validChildrenArray.length === index + 1;
        const spacingProps = { mb: isLastChild ? null : spacing };
        return React.cloneElement(child, spacingProps);
      })}
    </Box>
  );
};

Stack.displayName = 'Stack';

export default Stack;
