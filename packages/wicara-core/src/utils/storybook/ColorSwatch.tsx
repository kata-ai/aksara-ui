import * as React from 'react';
import { Box, Text, Heading } from '../../foundations';

interface ColorSwatchProps {
  title: string;
  colorKey: string;
  hex: string;
  hasBorder?: boolean;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ title, colorKey, hex, hasBorder }) => (
  <Box>
    <Box
      bg={hex}
      height={64}
      border="1px solid"
      borderColor={hasBorder ? 'gray30' : 'transparent'}
    />
    <Box display="flex" flexDirection="row" justifyContent="space-between" mt="sm">
      <Box>
        <Heading as="h5" scale="body" fontWeight={700} m={0}>
          {title}
        </Heading>
        <Text scale="body" fontFamily="monospace" color="gray50" fontWeight={400} m={0}>
          {colorKey}
        </Text>
      </Box>
      <Box>
        <Text scale="body" color="gray70" fontWeight={300} m={0}>
          {hex.toLowerCase()}
        </Text>
      </Box>
    </Box>
  </Box>
);

ColorSwatch.displayName = 'ColorSwatch';

export default ColorSwatch;
