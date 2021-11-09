import * as React from 'react';
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden';

export type VisuallyHiddenProps = VisuallyHiddenPrimitive.VisuallyHiddenProps;

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children, ...rest }) => {
  return <VisuallyHiddenPrimitive.Root {...rest}>{children}</VisuallyHiddenPrimitive.Root>;
};

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
