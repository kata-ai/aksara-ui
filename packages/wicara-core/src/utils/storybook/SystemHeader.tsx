import * as React from 'react';
import { Box, Heading, Paragraph } from '../../foundations';
import StoryContainer from './StoryContainer';
import AksaraLogo from './AksaraLogo';

export interface SystemHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

const SystemHeader: React.FC<SystemHeaderProps> = ({ title, subtitle }) => (
  <Box bg="cobalt" px="lg" py="xl">
    <StoryContainer>
      <Box mb={64}>
        <AksaraLogo height={40} />
      </Box>
      <Heading as="h1" scale="heading1" color="white" fontFamily="system" fontWeight={600}>
        {title}
      </Heading>
      {typeof subtitle === 'string' ? (
        <Paragraph m={0} scale="large" color="white" fontFamily="system" fontWeight={400}>
          {subtitle}
        </Paragraph>
      ) : (
        subtitle
      )}
    </StoryContainer>
  </Box>
);

SystemHeader.displayName = 'SystemHeader';

export default SystemHeader;
