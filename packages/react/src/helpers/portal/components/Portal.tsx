import * as React from 'react';
import * as PortalPrimitive from '@radix-ui/react-portal';

const Portal: React.FC<PortalPrimitive.PortalProps> = ({ children, ...rest }) => {
  return <PortalPrimitive.Root {...rest}>{children}</PortalPrimitive.Root>;
};

export default Portal;
