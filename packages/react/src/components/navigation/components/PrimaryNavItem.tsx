import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { useComponentStyles } from '../../../system';
import { UnstyledAnchor, UnstyledAnchorProps } from '../../../typography';

export interface PrimaryNavItemProps extends UnstyledAnchorProps, React.ComponentPropsWithoutRef<'a'> {
  size?: 'sm' | 'md' | 'lg';
  icon: React.ComponentType<any>;
  title: string;
  disabled?: boolean;
  isActive?: boolean;
}

const PrimaryNavItem = React.forwardRef<HTMLAnchorElement, PrimaryNavItemProps>(
  ({ size = 'lg', icon, disabled, isActive, title, ...rest }, ref) => {
    const primaryNavItemStyles = useComponentStyles('primaryNavItem', { size, disabled, isActive });

    return (
      <UnstyledAnchor ref={ref} sx={primaryNavItemStyles} {...rest}>
        <VisuallyHidden>{title}</VisuallyHidden>
        {React.createElement(icon, { fill: 'currentColor', 'aria-hidden': true })}
      </UnstyledAnchor>
    );
  }
);

PrimaryNavItem.displayName = 'PrimaryNavItem';

export default PrimaryNavItem;
