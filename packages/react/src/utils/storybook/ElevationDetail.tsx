import * as React from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';

const ElevationDetail: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height={210}
      p="md"
    >
      <Text as="h5" scale={300} fontWeight={400} color="grey05" m={0}>
        {title}
      </Text>
      <Text as="p" scale={300} color="grey07" m={0} mt="xs">
        {description}
      </Text>
    </Box>
  );
};

export default ElevationDetail;
