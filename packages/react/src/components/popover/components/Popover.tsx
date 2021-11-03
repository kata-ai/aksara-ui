import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '../../../layout';
import { SxProps, useComponentStyles } from '../../../system';

export interface PopoverProps extends PopoverPrimitive.PopoverProps, SxProps {
  /** Classname to pass to the popover content. */
  className?: string;
  /** CSS properties to pass to the popover content. */
  style?: React.CSSProperties;
  /** The element which triggers the popover content. */
  trigger: React.ReactElement;
  /** Popover placement. Uses the `side` props from `radix-ui` */
  placement?: PopoverPrimitive.PopoverContentProps['side'];
  /** Popover alignment. Uses the `alignment` props from `radix-ui` */
  align?: PopoverPrimitive.PopoverContentProps['align'];
  /** Offset for "start" or "end" alignment options. Uses the `alignOffset` props from `radix-ui` */
  alignOffset?: PopoverPrimitive.PopoverContentProps['alignOffset'];
}

const Popover: React.FC<PopoverProps> = ({
  className,
  style,
  sx,
  trigger,
  children,
  defaultOpen,
  open,
  onOpenChange,
  modal,
  placement = 'bottom',
  align = 'center',
  alignOffset = 0,
}) => {
  const popoverContentStyles = useComponentStyles('popoverContent');

  return (
    <PopoverPrimitive.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content asChild side={placement} sideOffset={8} align={align} alignOffset={alignOffset}>
        <Box className={className} style={style} sx={{ ...popoverContentStyles, ...sx }}>
          {children}
          <PopoverPrimitive.Arrow offset={22} width={20} height={8} fill="var(--popover-border)" />
        </Box>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

Popover.displayName = 'Popover';

export default Popover;
