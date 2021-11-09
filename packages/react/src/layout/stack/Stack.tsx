/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import * as CSS from 'csstype';

import { theme } from '../../theme';
import { Box, BoxProps } from '../box';

type Space = keyof typeof theme['space'];

export interface StackProps extends Omit<BoxProps, 'color'> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  direction?: 'horizontal' | 'vertical';
  spacing?: Space | CSS.Property.Margin;
  children?: React.ReactNode;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, spacing, direction = 'vertical', ...rest }, ref) => {
    const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          '> :not([hidden]) ~ :not([hidden])': {
            ...(direction === 'horizontal' ? { ml: spacing } : { mt: spacing }),
          },
        }}
        {...rest}
      >
        {validChildrenArray.map((child, i) => {
          if (typeof child === 'string' || child.type === React.Fragment) {
            return <Box key={`stack-child-${i}`}>{child}</Box>;
          }

          return React.cloneElement(child);
        })}
      </Box>
    );
  }
);

Stack.displayName = 'Stack';

export default Stack;
