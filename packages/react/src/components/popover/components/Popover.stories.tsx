import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Box, Stack } from '../../../layout';
import { Heading, Paragraph } from '../../../typography';
import { Button } from '../../button';
import { Popover, PopoverProps, PopoverTrigger, PopoverContent, PopoverContentProps } from './Popover';

export default {
  title: 'Core/Components/Popover',
  component: Popover,
  argTypes: {
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
    },
    align: {
      options: ['start', 'center', 'end'],
    },
  },
} as Meta<PopoverProps & Pick<PopoverContentProps, 'placement' | 'align'>>;

export const Example: Story<PopoverProps & Pick<PopoverContentProps, 'placement' | 'align'>> = ({
  placement,
  align,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="greylight03"
      width="100%"
      height={640}
    >
      <Popover>
        <PopoverTrigger>
          <Button variant="primary">Toggle Popover</Button>
        </PopoverTrigger>
        <PopoverContent placement={placement} align={align}>
          <Box width="100%" maxWidth={300}>
            <Box py="md" px="lg" borderBottom="1px solid" borderBottomColor="greylight04">
              <Heading scale={300}>Add agent to your team</Heading>
            </Box>
            <Box p="lg">
              <Paragraph scale={200}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor augue mauris augue neque
                gravida in fermentum.
              </Paragraph>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              py="sm"
              px="lg"
              borderTop="1px solid"
              borderTopColor="greylight04"
            >
              <Stack spacing="xs" direction="horizontal">
                <Button size="sm">Label</Button>
                <Button size="sm" variant="primary">
                  Label
                </Button>
              </Stack>
            </Box>
          </Box>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
Example.args = {
  placement: 'top',
  align: 'center',
};
