import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { CSSObject, useComponentStyles } from '../../../system';
import { theme } from '../../../theme';
import { Text } from '../../../typography';

export type ActionListItemVariant = 'default' | 'destructive';
export interface ActionListItemProps extends Omit<BoxProps, 'sx'>, React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  style?: React.CSSProperties;
  containerStyle?: CSSObject;
  contentStyle?: CSSObject;
  isActive?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: ActionListItemVariant;
  indicator?: boolean;
}

const ActionListItem = React.forwardRef<HTMLDivElement, ActionListItemProps>(
  (
    {
      style,
      children,
      isActive,
      disabled,
      containerStyle,
      variant = 'default',
      contentStyle,
      indicator = true,
      ...rest
    },
    ref
  ) => {
    const styles = useComponentStyles('actionListItem', { isActive, variant });
    const renderLabel = () => {
      if (typeof children === 'string' || typeof children === 'number') {
        return <Text scale={300}>{children}</Text>;
      }
      return children;
    };
    const disabledProps = disabled ? { 'aria-disabled': true, 'data-disabled': true } : {};
    return (
      <Box {...disabledProps} ref={ref} sx={{ ...styles, ...containerStyle }} style={style} {...rest}>
        {isActive && indicator && (
          // Indicator
          <Box width={4} position="absolute" left="0" top="0" height="100%" backgroundColor={theme.colors.blue07} />
        )}
        <Box py="xs" px="sm" sx={{ ...contentStyle }}>
          {renderLabel()}
        </Box>
      </Box>
    );
  }
);

export default ActionListItem;
