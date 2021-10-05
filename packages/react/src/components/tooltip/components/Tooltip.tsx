import * as React from 'react';
import clsx from 'clsx';
import { usePopperTooltip } from 'react-popper-tooltip';

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

// TODO: use base `react-popper` instead of `react-popper-tooltip`
const Tooltip: React.FC<TooltipProps> = ({ className, style, delay, placement, size, content, children }) => {
  const { getTooltipProps, getArrowProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    placement,
    delayShow: delay ? 300 : 0,
  });
  // separate this to cast the type
  const { style: tooltipStyle, ...rest } = getTooltipProps({ size });

  return (
    <>
      <span ref={setTriggerRef} className={clsx('trigger', className)} style={style}>
        {children}
      </span>{' '}
      {visible && (
        <TooltipInner
          ref={setTooltipRef}
          style={{ ...style, tooltipStyle } as React.CSSProperties}
          content={content}
          getArrowProps={getArrowProps}
          {...rest}
        />
      )}
    </>
  );
};

Tooltip.defaultProps = {
  size: 'sm',
  placement: 'top',
  delay: true,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
