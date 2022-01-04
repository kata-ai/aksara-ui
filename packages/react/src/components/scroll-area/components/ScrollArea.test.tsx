import { render } from '@testing-library/react';
import * as React from 'react';
import { ScrollArea } from './ScrollArea';
import { Box } from '../../../layout';
import { Text, Heading } from '../../../typography';

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.0.1-canary.${a.length - i}`);

describe('Component/ScrollArea', () => {
  describe('<ScrollArea/>', () => {
    test('renders properly', () => {
      const { container } = render(
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
      expect(container).toBeInTheDocument();
    });
  });
});
