import * as React from 'react';
import { Card, CardProps } from '../Card';

export type InteractiveCardProps = CardProps;

/**
 * @deprecated use `Card` instead
 */
const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, ...rest }) => {
  return (
    <Card elevation={1} position="relative" height="100%" minHeight={60} {...rest}>
      {children}
    </Card>
  );
};

export default InteractiveCard;
