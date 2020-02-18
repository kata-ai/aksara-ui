import * as React from 'react';
import styled from 'styled-components';

import BaseBadgeStyles, { BaseBadgeProps } from '../styles';
import { Text, TextProps } from '../../../foundations';

export interface BadgeProps extends BaseBadgeProps, TextProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
}

const Root = styled(Text)<BadgeProps>`
  ${BaseBadgeStyles}
`;

/** Badge text for entity, status, etc. */
const Badge: React.FC<BadgeProps> = ({ className, style, variant, children, ...rest }) => {
  return (
    <Root className={className} style={style} variant={variant} scale={200} {...rest}>
      {children}
    </Root>
  );
};

Badge.defaultProps = {
  variant: 'base',
  className: undefined,
  style: undefined,
};

Badge.displayName = 'Badge';

export default Badge;
