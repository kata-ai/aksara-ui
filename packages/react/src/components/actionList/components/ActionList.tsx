import { StackProps } from 'packages/react/dist';
import * as React from 'react';
import { Stack } from '../../../layout';

export interface ActionListProps extends StackProps, React.ComponentPropsWithoutRef<'div'> {}

const ActionList = React.forwardRef<HTMLDivElement, ActionListProps>(({ children, ...rest }, ref) => {
  return (
    <Stack spacing="xxs" borderRadius="lg" paddingY="sm" backgroundColor="greylight01" ref={ref} {...rest}>
      {children}
    </Stack>
  );
});

export default ActionList;
