import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../box';
import { Badge } from '../../../components';
import Wrap, { WrapProps } from './Wrap';
import WrapItem from './WrapItem';

export default {
  title: 'Core/Layout/Wrap',
  component: Wrap,
  argTypes: {
    spacing: {
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export const Example: Story<WrapProps> = ({ spacing }) => {
  return (
    <Box width={300}>
      <Wrap spacing={spacing}>
        <WrapItem>
          <Badge>Badge 1</Badge>
        </WrapItem>
        <WrapItem>
          <Badge>Badge 2</Badge>
        </WrapItem>
        <WrapItem>
          <Badge>Badge 3</Badge>
        </WrapItem>
        <WrapItem>
          <Badge>Badge 4</Badge>
        </WrapItem>
        <WrapItem>
          <Badge>Badge 5</Badge>
        </WrapItem>
        <WrapItem>
          <Badge>Badge 6</Badge>
        </WrapItem>
        <WrapItem>
          <Badge>Badge 7</Badge>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

Example.args = {
  spacing: 'xs',
};
