import * as React from 'react';
import { Box, BoxProps } from '../../layout';
import { Text } from '../../typography';
import { theme } from '../../theme';

interface SpacingBlockProps extends BoxProps {
  spacing: string;
}

const SpacingBlock: React.FC<SpacingBlockProps> = ({ spacing, ...rest }) => {
  return (
    <Box display="flex" alignItems="center" {...rest}>
      <Box mr="md" flex="0 1 200px">
        <Text fontFamily="monospace">
          spacing: {spacing} ({theme.space[spacing as keyof typeof theme['space']]}
          px)
        </Text>
      </Box>
      <Box height="lg" width={spacing} backgroundColor="red02" />
    </Box>
  );
};

export default SpacingBlock;
