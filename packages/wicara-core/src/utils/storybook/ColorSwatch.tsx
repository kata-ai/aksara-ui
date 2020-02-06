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
    <Box bg={hex} height={64} border="1px solid" borderColor={hasBorder ? 'grey03' : 'transparent'} />
    <Box display="flex" flexDirection="row" justifyContent="space-between" mt="xxs">
      <Box>
        <Heading as="h5" scale={300} color="grey09" fontWeight={700} m={0}>
          {title}
        </Heading>
        <Text as="p" fontFamily="monospace" scale={200} color="grey09" m={0}>
          {colorKey}
        </Text>
      </Box>
      <Box>
        <Heading as="p" scale={300} color="grey07" m={0}>
          {hex.toUpperCase()}
        </Heading>
      </Box>
    </Box>
  </Box>
);

ColorSwatch.displayName = 'ColorSwatch';

export default ColorSwatch;
