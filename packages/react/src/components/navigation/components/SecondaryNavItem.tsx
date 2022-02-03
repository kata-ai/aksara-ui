import * as React from 'react';
import { useComponentStyles } from '../../../system';
import { Text, UnstyledAnchor, UnstyledAnchorProps } from '../../../typography';

export interface SecondaryNavItemProps extends UnstyledAnchorProps, React.ComponentPropsWithoutRef<'a'> {
  icon: React.ComponentType<any>;
  title: string;
  disabled?: boolean;
  isActive?: boolean;
  labelText?: string;
}

const SecondaryNavItem = React.forwardRef<HTMLAnchorElement, SecondaryNavItemProps>(
  ({ icon, disabled, isActive, title, labelText, ...rest }, ref) => {
    const secondaryNavItemStyles = useComponentStyles('secondaryNavItem', { disabled, isActive });
    const navItemBadgeStyles = useComponentStyles('navItemBadge', { disabled, isActive });

    return (
      <UnstyledAnchor ref={ref} sx={secondaryNavItemStyles} {...rest}>
        {React.createElement(icon, { fill: 'currentColor', 'aria-hidden': true, size: 20 })}
        <Text scale={300} display="block" flex="1 1 auto" ml="xs">
          {title}
        </Text>
        {labelText && (
          <Text ml="md" sx={navItemBadgeStyles}>
            {labelText}
          </Text>
        )}
      </UnstyledAnchor>
    );
  }
);

SecondaryNavItem.displayName = 'SecondaryNavItem';

export default SecondaryNavItem;
