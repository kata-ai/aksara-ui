import * as React from 'react';

import { Stack, Box } from '../../layout';

import { SideSheet, SideSheetContent } from '../side-sheet';
import { Button } from '../button';
import { BoxFooter, BoxHeader } from '.';

export default {
  title: 'Core/Components/Box Header Footer/Footer',
  component: [SideSheet, BoxHeader, SideSheetContent, BoxFooter],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#fcf1f1',
        },
      ],
    },
  },
};

export const BasicExample = ({ size, caption }: { size: 'sm' | 'md' | 'lg'; caption: string }) => {
  return (
    <Box p="md" width={400}>
      <BoxFooter
        size={size}
        actions={
          <Stack direction="horizontal" spacing="xs">
            <Button block size={'md'}>
              Label
            </Button>
            <Button block variant="primary" size={'md'}>
              Label
            </Button>
          </Stack>
        }
        caption={caption}
      />
    </Box>
  );
};

BasicExample.args = {
  size: 'sm',
  caption: '',
};

export const FullWidthButton = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <Box p="md" width={400}>
      <BoxFooter
        size={size}
        actions={
          <Stack direction="horizontal" spacing="xs" width={'100%'}>
            <Button block size={size}>
              Label
            </Button>
            <Button block variant="primary" size={size}>
              Label
            </Button>
          </Stack>
        }
      />
    </Box>
  );
};

FullWidthButton.args = {
  size: 'lg',
};
