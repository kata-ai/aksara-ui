import * as React from 'react';
import { Box, Heading, Text } from '../../foundations';
import StoryContainer from './StoryContainer';
import AksaraLogo from './AksaraLogo';

export interface SystemHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

const SystemHeader: React.FC<SystemHeaderProps> = ({ title, subtitle }) => (
  <Box bg="cobalt" px="lg" py="xl" color="white">
    <StoryContainer>
      <Box mb={64}>
        <AksaraLogo height={40} />
      </Box>
      <Heading as="h1" scale={900} color="white" fontFamily="barlow" fontWeight={600}>
        {title}
      </Heading>
      {typeof subtitle === 'string' ? (
        <Text as="p" mb={0} mt="md" scale={400}>
          {subtitle}
        </Text>
      ) : (
        subtitle
      )}
    </StoryContainer>
  </Box>
);

SystemHeader.displayName = 'SystemHeader';

export default SystemHeader;
