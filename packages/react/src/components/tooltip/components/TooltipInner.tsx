import * as React from 'react';
import styled from 'styled-components';
import * as popper from '@popperjs/core';
import { usePopperTooltip } from 'react-popper-tooltip';

import { Text, Paragraph, Box } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { useTheme } from '../../../theme';

export type TooltipPlacement = popper.Placement;
export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
  getArrowProps?: ReturnType<typeof usePopperTooltip>['getArrowProps'];
}

const Arrow = styled(Box)`
  height: 1rem;
  position: absolute;
  width: 1rem;
  pointer-events: none;

  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &::after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }
`;

const TooltipInner = React.forwardRef<HTMLDivElement, TooltipInnerProps>(
  ({ className, style, content, size, placement, getArrowProps, ...rest }, ref) => {
    const theme = useTheme();
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
      <Box
        zIndex={9999}
        className={className}
        style={style}
        ref={ref}
        data-popper-placement={placement}
        sx={{
          ...tooltipRootStyles,
          '--tooltip-foreground': theme.colors.greylight01,
          '--tooltip-border': theme.colors.greydark02,
          '--tooltip-background': theme.colors.greydark02,
        }}
        {...rest}
      >
        {renderContent()}
        {getArrowProps && <Arrow {...getArrowProps({ className: 'tooltip-arrow' })} />}
      </Box>
    );
  }
);

TooltipInner.displayName = 'TooltipInner';

export default TooltipInner;
