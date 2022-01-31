import * as React from 'react';
import * as PortalPrimitive from '@radix-ui/react-portal';
import { useOnMount } from '../../utils';

export type PortalProps = PortalPrimitive.PortalProps;

const Portal: React.FC<PortalProps> = ({ children, ...rest }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  // Prevent SSR error in Next.js by only rendering portal when this component is mounted.
  useOnMount(() => {
    setIsMounted(true);
  });

  if (isMounted) {
    return <PortalPrimitive.Root {...rest}>{children}</PortalPrimitive.Root>;
  }

  return null;
};

export default Portal;
