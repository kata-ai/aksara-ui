import * as React from 'react';
import { useComponentStyles } from '../../../system';
import { UnstyledAnchor, UnstyledAnchorProps } from '../../../layout';

export interface PrimaryNavItemProps extends UnstyledAnchorProps, React.ComponentPropsWithoutRef<'a'> {
  size?: 'sm' | 'md' | 'lg';
  icon: React.ComponentType<any>;
  disabled?: boolean;
  isActive?: boolean;
}

const PrimaryNavItem = React.forwardRef<HTMLAnchorElement, PrimaryNavItemProps>(
  ({ size = 'lg', icon, disabled, isActive, ...rest }, ref) => {
    const primaryNavItemStyles = useComponentStyles('primaryNavItem', { size, disabled, isActive });

    return (
      <UnstyledAnchor ref={ref} sx={primaryNavItemStyles} {...rest}>
        {React.createElement(icon, { fill: 'currentColor' })}
      </UnstyledAnchor>
    );
  }
);

PrimaryNavItem.displayName = 'PrimaryNavItem';

export default PrimaryNavItem;
