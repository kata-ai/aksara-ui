import * as React from 'react';
import { Box } from '../../layout';
import { Heading, Text } from '../../typography';
import StoryContainer from './StoryContainer';
import AksaraLogo from './AksaraLogo';

export interface SystemHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

const SystemHeader: React.FC<SystemHeaderProps> = ({ title, subtitle }) => (
  <Box bg="blue09" px="lg" py="xl" color="white">
    <StoryContainer>
      <Box mb={64}>
        <AksaraLogo height={40} />
      </Box>
      <Heading as="h1" scale={900} color="white" fontFamily="brand" fontWeight={500} maxWidth={500} mb={0}>
        {title}
      </Heading>
      {typeof subtitle === 'string' ? (
        <Text as="p" mb={0} mt="md" scale={400} maxWidth={500}>
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
