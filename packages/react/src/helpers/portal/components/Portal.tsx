import * as React from 'react';
import * as PortalPrimitive from '@radix-ui/react-portal';

export type PortalProps = PortalPrimitive.PortalProps;

const Portal: React.FC<PortalProps> = ({ children, ...rest }) => {
  return <PortalPrimitive.Root {...rest}>{children}</PortalPrimitive.Root>;
};

export default Portal;
