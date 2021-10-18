import * as React from 'react';
import { useComponentStyles } from '../../system';
import { UnstyledAnchor, UnstyledAnchorProps } from '../../typography';

export interface BreadcrumbItemProps extends UnstyledAnchorProps, React.ComponentPropsWithoutRef<'a'> {
  active?: boolean;
  isOverflowItem?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ className, children, sx, active, isOverflowItem, ...rest }, ref) => {
    const styles = useComponentStyles('breadcrumbItem', { active, variant: isOverflowItem ? 'overflow' : 'default' });
    return (
      <UnstyledAnchor ref={ref} className={className} sx={{ ...styles, ...sx }} {...rest}>
        {children}
      </UnstyledAnchor>
    );
  }
);

export default BreadcrumbItem;
