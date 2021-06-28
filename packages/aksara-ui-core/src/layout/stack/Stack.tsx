/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import { theme } from '../../theme';
import { Box, BoxProps } from '../box';

type Space = keyof typeof theme['space'];

export interface StackProps extends Omit<BoxProps, 'color'> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  spacing?: Space;
  children?: React.ReactNode;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ children, spacing, ...rest }, ref) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box ref={ref} {...rest}>
      {validChildrenArray.map((child, i) => {
        const isLastChild = validChildrenArray.length === i + 1;
        const spacingProps = { mb: isLastChild ? 0 : spacing };
        if (typeof child === 'string' || child.type === React.Fragment) {
          return (
            <Box key={`stack-child-${i}`} {...spacingProps}>
              {child}
            </Box>
          );
        }

        return React.cloneElement(child, spacingProps);
      })}
    </Box>
  );
});

Stack.displayName = 'Stack';

export default Stack;
