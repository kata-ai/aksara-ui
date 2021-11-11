import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '../../../layout';
import { SxProps, useComponentStyles } from '../../../system';

export type PopoverProps = PopoverPrimitive.PopoverProps;

export type PopoverTriggerProps = Omit<PopoverPrimitive.PopoverTriggerProps, 'asChild'>;

export interface PopoverContentProps extends Omit<PopoverPrimitive.PopoverContentProps, 'side'>, SxProps {
  /** Classname to pass to the popover content. */
  className?: string;
  /** CSS properties to pass to the popover content. */
  style?: React.CSSProperties;
  /** Popover placement. Uses the `side` props from `radix-ui` */
  placement?: PopoverPrimitive.PopoverContentProps['side'];
  arrowOffset?: PopoverPrimitive.PopoverArrowProps['offset'];
  /** `true` to hide the arrow in the popover */
  disableArrow?: boolean;
}

export const Popover: React.FC<PopoverProps> = ({ children, defaultOpen, open, onOpenChange, modal, ...rest }) => {
  return (
    <PopoverPrimitive.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal} {...rest}>
      {children}
    </PopoverPrimitive.Root>
  );
};

Popover.displayName = 'Popover';

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, ...rest }) => {
  return (
    <PopoverPrimitive.Trigger asChild {...rest}>
      {children}
    </PopoverPrimitive.Trigger>
  );
};

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
      arrowOffset = 22,
      disableArrow = false,
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
          {!disableArrow && (
            <PopoverPrimitive.Arrow offset={arrowOffset} width={20} height={8} fill="var(--popover-border)" />
          )}
        </Box>
      </PopoverPrimitive.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
