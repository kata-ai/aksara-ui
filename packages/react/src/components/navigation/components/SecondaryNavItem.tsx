import * as React from 'react';
import { IconChevronRight } from '@aksara-ui/icons';
import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Text, UnstyledAnchor, UnstyledAnchorProps } from '../../../typography';

export interface SecondaryNavItemProps extends UnstyledAnchorProps, React.ComponentPropsWithoutRef<'a'> {
  variant?: 'default' | 'disclosure';
  icon: React.ComponentType<any>;
  title: string;
  disabled?: boolean;
  isActive?: boolean;
  labelText?: string;
}

const SecondaryNavItem = React.forwardRef<HTMLAnchorElement, SecondaryNavItemProps>(
  ({ icon, disabled, isActive, title, variant = 'default', labelText, ...rest }, ref) => {
    const secondaryNavItemStyles = useComponentStyles('secondaryNavItem', { variant, disabled, isActive });
    const navItemBadgeStyles = useComponentStyles('navItemBadge', { variant, disabled, isActive });

    return (
      <UnstyledAnchor ref={ref} sx={secondaryNavItemStyles} {...rest}>
        {React.createElement(icon, { fill: 'currentColor', 'aria-hidden': true, size: 20 })}
        <Text scale={300} display="block" flex="1 1 auto" ml="xs">
          {title}
        </Text>
        {variant === 'default' ? (
          labelText && (
            <Text ml="md" sx={navItemBadgeStyles}>
              {labelText}
            </Text>
          )
        ) : (
          <Box width={16} height={16} ml="md">
            <IconChevronRight fill="currentColor" aria-hidden size={16} />
          </Box>
        )}
      </UnstyledAnchor>
    );
  }
);

SecondaryNavItem.displayName = 'SecondaryNavItem';

export default SecondaryNavItem;
