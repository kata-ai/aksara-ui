/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Space } from '../../../../Theme';
import { Box, BoxProps } from '../../../box';

export interface InlineProps extends Omit<BoxProps, 'color'> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  spacing?: Space;
}

const Root = styled(Box)<InlineProps>`
  ${props => props.spacing && `margin-top: -${themeGet(`space.${props.spacing}`, 0)(props)}px;`}
`;

const Inner = styled(Box)<InlineProps>`
  ${props => props.spacing && `margin-left: -${themeGet(`space.${props.spacing}`, 0)(props)}px;`}
`;

const Inline: React.FC<InlineProps> = ({ children, spacing, alignItems, ...rest }) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Root spacing={spacing} {...rest}>
      <Inner display="flex" flexWrap="wrap" alignItems={alignItems} spacing={spacing}>
        {validChildrenArray.map((child, i) => {
          const spacingProps = { display: 'block', mt: spacing, ml: spacing, mb: 0, mr: 0 };
          return (
            <Box key={`inline-child-${i}`} {...spacingProps}>
              {child}
            </Box>
          );
        })}
      </Inner>
    </Root>
  );
};

Inline.defaultProps = {
  spacing: 'sm',
};

Inline.displayName = 'Inline';

export default Inline;
