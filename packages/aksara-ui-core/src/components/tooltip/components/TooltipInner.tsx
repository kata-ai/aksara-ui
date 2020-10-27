import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import * as popper from '@popperjs/core';

import { colors } from '../../../utils';
import { Text, Paragraph, Box } from '../../../foundations';

export type TooltipPlacement = popper.Placement;
export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
}

const Inner = styled('div')<Omit<TooltipInnerProps, 'placement' | 'content'>>`
  ${variant({
    prop: 'size',
    variants: {
      sm: {
        py: 'xxs',
        px: 'md',
        maxWidth: 200,
      },
      md: {
        p: 'md',
        maxWidth: 200,
      },
      lg: {
        p: 'md',
        maxWidth: 200,
      },
    },
  })}
  text-align: left;
  vertical-align: middle;
  border-radius: 4px;

  color: ${themeGet('colors.text-inverse', colors['text-inverse'])};
  background-color: ${themeGet('colors.grey09', colors.grey09)};
`;

const TooltipInner: React.ForwardRefRenderFunction<HTMLDivElement, TooltipInnerProps> = (
  { className, style, content, size, placement, ...rest },
  ref
) => {
  const renderContent = () => {
    if (typeof content === 'string') {
      if (size === 'sm') {
        return <Text scale={300}>{content}</Text>;
      }

      return (
        <Paragraph scale={300} m={0}>
          {content}
        </Paragraph>
      );
    }

    return content;
  };

  return (
    <Box p="xxs" zIndex={9999} className={className} style={style} ref={ref} data-placement={placement} {...rest}>
      <Inner size={size}>{renderContent()}</Inner>
    </Box>
  );
};

TooltipInner.displayName = 'TooltipInner';

export default React.forwardRef(TooltipInner);
