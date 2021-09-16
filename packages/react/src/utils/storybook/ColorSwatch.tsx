import * as React from 'react';
import { Box } from '../../layout';
import { Text, Heading } from '../../typography';

interface ColorSwatchProps {
  title: string;
  colorKey: string;
  hex: string;
  hasBorder?: boolean;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ title, colorKey, hex, hasBorder }) => (
  <Box>
    <Box bg={hex} height={64} border="1px solid" borderColor={hasBorder ? 'greylight03' : 'transparent'} />
    <Box display="flex" flexDirection="row" justifyContent="space-between" mt="xxs">
      <Box>
        <Heading as="h5" scale={300} color="greydark05" fontWeight={700} m={0}>
          {title}
        </Heading>
        <Text as="p" fontFamily="monospace" scale={200} color="greydark05" m={0}>
          {colorKey}
        </Text>
      </Box>
      <Box>
        <Heading as="p" scale={300} color="greymed05" m={0}>
          {hex.toUpperCase()}
        </Heading>
      </Box>
    </Box>
  </Box>
);

ColorSwatch.displayName = 'ColorSwatch';

export default ColorSwatch;
