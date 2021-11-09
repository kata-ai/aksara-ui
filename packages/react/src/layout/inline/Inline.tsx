/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import { Theme } from '../../theme';
import { BoxProps } from '../box';
import { Stack } from '../stack';

type Space = keyof Theme['space'];

interface SpacingProps {
  spacing?: Space;
}

export interface InlineProps extends Omit<BoxProps, 'color'>, SpacingProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  children?: React.ReactNode;
}

/**
 * @deprecated Please use `<Stack direction="horizontal" />`.
 */
const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  ({ children, spacing = 'sm', alignItems, ...rest }, ref) => {
    return (
      <Stack ref={ref} direction="horizontal" spacing={spacing} {...rest}>
        {children}
      </Stack>
    );
  }
);

Inline.displayName = 'Inline';

export default Inline;
