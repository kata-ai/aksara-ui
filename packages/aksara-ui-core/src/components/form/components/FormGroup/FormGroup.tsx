import * as React from 'react';
import { Stack, StackProps } from '../../../../layout';

export interface FormGroupProps extends StackProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * @deprecated use `<Stack spacing="xs" />` instead.
 */
const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(({ className, style, children, ...rest }, ref) => {
  return (
    <Stack ref={ref} spacing="xs" className={className} style={style} {...rest}>
      {children}
    </Stack>
  );
});

FormGroup.displayName = 'FormGroup';

export default FormGroup;
