import * as React from 'react';
import clsx from 'clsx';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import TooltipInner, { TooltipSize } from './TooltipInner';

export interface TooltipProps extends Omit<TooltipPrimitive.TooltipContentProps, 'asChild' | 'side' | 'align'> {
  className?: string;
  style?: React.CSSProperties;
  delay?: boolean;
  content: string | React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  placement?: TooltipPrimitive.TooltipContentProps['side'];
  onOpenChange?: (open: boolean) => void;
  size?: TooltipSize;
  children: React.ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  style,
  open,
  defaultOpen,
  placement,
  onOpenChange,
  content,
  size,
  children,
  ...rest
}) => {
  return (
    <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <TooltipPrimitive.Trigger asChild className={clsx('trigger', className)} style={style}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content asChild side={placement} align="center" {...rest}>
        <TooltipInner
          content={content}
          size={size}
          arrow={<TooltipPrimitive.Arrow offset={5} width={11} height={5} fill="var(--tooltip-border)" />}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};

Tooltip.defaultProps = {
  size: 'sm',
  placement: 'top',
  delay: true,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
