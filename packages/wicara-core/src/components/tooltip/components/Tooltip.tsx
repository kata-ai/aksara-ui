import React from 'react';
import clsx from 'clsx';
import TooltipTrigger from 'react-popper-tooltip';

import TooltipInner, { TooltipPlacement, TooltipSize } from './TooltipInner';

export interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: boolean;
  content: string | React.ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
  children: React.ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({ className, style, delay, placement, size, content, children }) => {
  return (
    <TooltipTrigger
      trigger="hover"
      delayShow={delay ? 300 : 0}
      placement={placement}
      tooltip={({ tooltipRef, getTooltipProps, placement: popperPlacement }) => (
        <TooltipInner
          {...getTooltipProps({
            size,
            ref: tooltipRef,
            placement: popperPlacement,
          })}
          content={content}
        />
      )}
    >
      {({ getTriggerProps, triggerRef }) => {
        return (
          <span
            {...getTriggerProps({
              style,
              ref: triggerRef,
              className: clsx('trigger', className),
            })}
          >
            {children}
          </span>
        );
      }}
    </TooltipTrigger>
  );
};

Tooltip.defaultProps = {
  size: 'sm',
  placement: 'top',
  delay: true,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
