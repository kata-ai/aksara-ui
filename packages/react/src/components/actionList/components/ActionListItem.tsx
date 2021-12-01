import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { theme } from '../../../theme';
import { Text } from '../../../typography';

export interface ActionListItemProps extends BoxProps, React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  children?: React.ReactNode;
}

const ActionListItem = React.forwardRef<HTMLDivElement, ActionListItemProps>(
  ({ style, children, isActive, ...rest }, ref) => {
    const styles = useComponentStyles('actionListItem', { isActive });
    const renderLabel = () => {
      if (typeof children === 'string') {
        return (
          <Text scale={300} marginLeft={isActive ? '-4px' : ''}>
            {children}
          </Text>
        );
      }
      return children;
    };
    return (
      <Box ref={ref} sx={styles} {...rest}>
        {isActive && (
          // Indicator
          <Box width={4} position="absolute" left="0" top="0" height="100%" backgroundColor={theme.colors.blue07} />
        )}
        <Box py="xs" px="md" style={style}>
          {renderLabel()}
        </Box>
      </Box>
    );
  }
);

export default ActionListItem;
