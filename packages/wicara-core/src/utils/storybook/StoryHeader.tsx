import * as React from 'react';
import { Box, Heading, Text } from '../../foundations';

export interface StoryHeaderProps {
  title: string;
  subtitle?: string;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({ title, subtitle }) => (
  <Box mb="lg">
    <Heading scale="heading1" mb="xxs">
      {title}
    </Heading>
    {subtitle ? (
      <Text as="p" color="gray60" scale="large">
        {subtitle}
      </Text>
    ) : null}
  </Box>
);

export default StoryHeader;
