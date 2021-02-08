import React from 'react';
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

const Tooltip: React.FC<TooltipProps> = ({ className, style, delay, placement, size, content, children }) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    placement,
    delayShow: delay ? 300 : 0,
  });

  return (
    <>
      <span ref={setTriggerRef} className={clsx('trigger', className)} style={style}>
        {children}
      </span>{' '}
      {visible && (
        <TooltipInner
          ref={setTooltipRef}
          {...getTooltipProps({
            size,
          })}
          content={content}
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
