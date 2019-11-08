import * as React from 'react';
import styled from 'styled-components';

import BaseBadgeStyles, { BaseBadgeProps } from '../styles';

export interface BadgeProps extends BaseBadgeProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
}

const Root = styled('span')<BadgeProps>`
  ${BaseBadgeStyles}
`;

/** Badge text for entity, status, etc. */
const Badge: React.FC<BadgeProps> = ({ className, style, variant, children }) => {
  return (
    <Root className={className} style={style} variant={variant}>
      {children}
    </Root>
  );
};

Badge.defaultProps = {
  variant: 'entity',
  className: undefined,
  style: undefined
};

Badge.displayName = 'Badge';

export default Badge;
