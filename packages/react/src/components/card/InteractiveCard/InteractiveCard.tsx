import * as React from 'react';
import { Card, CardProps } from '../Card';

/**
 * @deprecated use `Card` instead
 */
const InteractiveCard: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <Card elevation={1} position="relative" height="100%" minHeight={60} {...rest}>
      {children}
    </Card>
  );
};

export default InteractiveCard;
