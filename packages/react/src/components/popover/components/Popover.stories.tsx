import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Box, Stack } from '../../../layout';
import { Heading, Paragraph } from '../../../typography';
import { Button } from '../../button';
import Popover, { PopoverProps } from './Popover';

export default {
  title: 'Core/Components/Popover',
  component: Popover,
  argTypes: {
    placement: {
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
  },
} as Meta<PopoverProps>;

export const Example: Story<PopoverProps> = ({ placement }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="greylight03"
      width="100%"
      height={640}
    >
      <Popover placement={placement} trigger={<Button variant="primary">Toggle Popover</Button>}>
        <Box>
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
      </Popover>
    </Box>
  );
};
Example.args = {
  placement: 'bottom',
};
