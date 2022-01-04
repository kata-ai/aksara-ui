import * as React from 'react';
import { Story } from '@storybook/react';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';
import { Box } from '../../../layout';
import { Text, Heading } from '../../../typography';

export default {
  title: 'Core/Components/ScrollArea',
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#b6b2b2',
        },
      ],
    },
  },
};

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.0.1-canary.${a.length - i}`);

export const Example: Story<ScrollAreaProps> = () => {
  return (
    <Box backgroundColor={'greylight01'} borderRadius={'sm'} overflow={'hidden'} width={200}>
      <ScrollArea type="always" scroll="vertical" width={200} height={225}>
        <Box style={{ padding: '15px 20px' }}>
          <Heading scale={300}>Tags</Heading>
          {TAGS.map(tag => (
            <Box key={tag} borderTop={'1px solid greylight04'} p={'md'}>
              <Text>{tag}</Text>
            </Box>
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};
