import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '../../../layout';
import { SxProps, useComponentStyles } from '../../../system';

export interface PopoverProps extends PopoverPrimitive.PopoverProps {
  /** The element which triggers the popover content. */
  trigger: React.ReactElement;
}

export interface PopoverContentProps extends Omit<PopoverPrimitive.PopoverContentProps, 'side'>, SxProps {
  /** Classname to pass to the popover content. */
  className?: string;
  /** CSS properties to pass to the popover content. */
  style?: React.CSSProperties;
  /** Popover placement. Uses the `side` props from `radix-ui` */
  placement?: PopoverPrimitive.PopoverContentProps['side'];
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  defaultOpen,
  open,
  onOpenChange,
  modal,
  ...rest
}) => {
  return (
    <PopoverPrimitive.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal} {...rest}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      {children}
    </PopoverPrimitive.Root>
  );
};

Popover.displayName = 'Popover';

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      children,
      className,
      style,
      sx,
      placement = 'bottom',
      sideOffset = 8,
      align = 'center',
      alignOffset = 0,
      ...rest
    },
    ref
  ) => {
    const popoverContentStyles = useComponentStyles('popoverContent');
    return (
      <PopoverPrimitive.Content
        asChild
        side={placement}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        {...rest}
      >
        <Box ref={ref} className={className} style={style} sx={{ ...popoverContentStyles, ...sx }}>
          {children}
          <PopoverPrimitive.Arrow offset={22} width={20} height={8} fill="var(--popover-border)" />
        </Box>
      </PopoverPrimitive.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
