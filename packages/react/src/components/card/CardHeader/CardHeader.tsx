import * as React from 'react';

import { Box, BoxProps } from '../../../layout';
import { Heading } from '../../../typography';

export interface CardHeaderProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  actions?: React.ReactNode;
  avatar?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, style, avatar, title, actions, ...rest }) => {
  return (
    <Box className={className} style={style} display="flex" flexDirection="row" alignItems="center" {...rest}>
      {avatar && <Box mr="md">{avatar}</Box>}
      <Heading scale={400} flex="1 1 auto" m={0} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
        {title}
      </Heading>
      {actions && (
        <Box flex="none" ml="md">
          {actions}
        </Box>
      )}
    </Box>
  );
};

export default CardHeader;
