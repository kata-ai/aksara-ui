import * as React from 'react';
import * as popper from '@popperjs/core';

import { Text, Paragraph, Box } from '../../../layout';
import { useComponentStyles } from '../../../system';

export type TooltipPlacement = popper.Placement;
export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
}

const TooltipInner = React.forwardRef<HTMLDivElement, TooltipInnerProps>(
  ({ className, style, content, size, placement, ...rest }, ref) => {
    const tooltipInnerStyles = useComponentStyles('tooltipInner', { size });

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
      <Box
        p="xxs"
        zIndex={9999}
        className={className}
        style={style}
        ref={ref}
        data-popper-placement={placement}
        {...rest}
      >
        <Box sx={tooltipInnerStyles}>{renderContent()}</Box>
      </Box>
    );
  }
);

TooltipInner.displayName = 'TooltipInner';

export default TooltipInner;
