/* eslint-disable react/no-array-index-key */
import { Properties } from 'csstype';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { theme } from '../../../theme';
import { Box, BoxProps } from '../../box';
import WrapItem from './WrapItem';

type Space = keyof typeof theme['space'];

export interface WrapProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  /** `align-items` value. */
  alignItems?: Properties['alignItems'];
  /** `justify-content` value. */
  justifyContent?: Properties['justifyContent'];
  /** The space between each child element. */
  spacing?: Space | Properties['margin'];
  /** If `true`, the children will be wrapped with a `WrapItem`. */
  shouldWrapChildren?: boolean;
}

const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
  ({ children, spacing = 'xs', alignItems, justifyContent, shouldWrapChildren, ...rest }, ref) => {
    const childrenToRender = shouldWrapChildren
      ? React.Children.map(children, (child, index) => <WrapItem key={`wrap-child-${index}`}>{child}</WrapItem>)
      : children;

    return (
      <Box ref={ref} {...rest}>
        <Box
          as="ul"
          sx={{
            '--aksara-wrap-spacing': (t: DefaultTheme) => t.space[spacing as Space] || spacing,
            '--wrap-spacing': 'calc(var(--aksara-wrap-spacing) / 2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems,
            justifyContent,
            listStyleType: 'none',
            padding: 0,
            margin: 'calc(var(--wrap-spacing) * -1)',
            '& > :not([hidden])': {
              margin: 'var(--wrap-spacing)',
            },
          }}
        >
          {childrenToRender}
        </Box>
      </Box>
    );
  }
);

Wrap.displayName = 'Wrap';

export default Wrap;
