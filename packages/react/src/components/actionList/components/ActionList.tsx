import * as React from 'react';
import { Stack, StackProps } from '../../../layout';

export interface ActionListProps extends StackProps, React.ComponentPropsWithoutRef<'div'> {}

const ActionList = React.forwardRef<HTMLDivElement, ActionListProps>(({ children, ...rest }, ref) => {
  return (
    <Stack
      display="block"
      spacing="xxs"
      borderRadius="lg"
      paddingY="sm"
      backgroundColor="greylight01"
      ref={ref}
      {...rest}
    >
      {children}
    </Stack>
  );
});

export default ActionList;
