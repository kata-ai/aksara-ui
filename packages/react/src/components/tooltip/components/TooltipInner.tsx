import * as React from 'react';

import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Text, Paragraph } from '../../../typography';

export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  size?: TooltipSize;
  arrow: React.ReactNode;
}

const TooltipInner = React.forwardRef<HTMLDivElement, TooltipInnerProps>(
  ({ className, style, content, size, arrow, ...rest }, ref) => {
    const tooltipRootStyles = useComponentStyles('tooltipRoot', { size });

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
      <Box zIndex={9999} className={className} style={style} ref={ref} sx={tooltipRootStyles} {...rest}>
        {renderContent()}
        {arrow}
      </Box>
    );
  }
);

TooltipInner.displayName = 'TooltipInner';

export default TooltipInner;
