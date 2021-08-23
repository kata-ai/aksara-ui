import * as React from 'react';
import { Anchor, AnchorProps } from '../../layout';

export type BreadcrumbItemProps = AnchorProps & React.ComponentPropsWithoutRef<'a'>;

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <Anchor ref={ref} className={className} {...rest}>
        {children}
      </Anchor>
    );
  }
);

export default BreadcrumbItem;
