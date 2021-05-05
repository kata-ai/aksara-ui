/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { get } from 'styled-system';

import { useTheme, Theme } from '../../theme';
import { Box, BoxProps } from '../box';

type Space = keyof Theme['space'];

interface SpacingProps {
  spacing?: Space;
}

export interface InlineProps extends Omit<BoxProps, 'color'>, SpacingProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

const Inline: React.FC<InlineProps> = ({ children, spacing = 'sm', alignItems, ...rest }) => {
  const theme = useTheme();
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  const negativeSpacing = React.useMemo(() => `-${get(theme, `space.${spacing}`, 0)}px`, [theme]);

  return (
    <Box marginTop={negativeSpacing} {...rest}>
      <Box display="flex" flexWrap="wrap" alignItems={alignItems} marginLeft={negativeSpacing}>
        {validChildrenArray.map((child, i) => {
          const spacingProps = { mt: spacing, ml: spacing, mb: 0, mr: 0 };
          if (typeof child === 'string' || child.type === React.Fragment) {
            return (
              <Box key={`inline-child-${i}`} {...spacingProps}>
                {child}
              </Box>
            );
          }

          return React.cloneElement(child, spacingProps);
        })}
      </Box>
    </Box>
  );
};

Inline.displayName = 'Inline';

export default Inline;
