import * as React from 'react';
import styled from 'styled-components';
import * as popper from '@popperjs/core';
import { usePopperTooltip } from 'react-popper-tooltip';

import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Text, Paragraph } from '../../../typography';

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

// TODO: use base `react-popper` instead of `react-popper-tooltip`
const TooltipInner = React.forwardRef<HTMLDivElement, TooltipInnerProps>(
  ({ className, style, content, size, placement, getArrowProps, ...rest }, ref) => {
    const tooltipRootStyles = useComponentStyles('tooltipRoot', { size });

    const renderArrow = () => {
      if (getArrowProps) {
        const { style: arrowStyle, ...arrowRest } = getArrowProps({ className: 'tooltip-arrow' });
        return <Arrow style={{ ...style, ...arrowStyle } as React.CSSProperties} {...arrowRest} />;
      }

      return null;
    };

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
        sx={tooltipRootStyles}
        {...rest}
      >
        {renderContent()}
        {renderArrow()}
      </Box>
    );
  }
);

TooltipInner.displayName = 'TooltipInner';

export default TooltipInner;
