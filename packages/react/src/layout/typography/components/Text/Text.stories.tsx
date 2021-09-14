import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { theme } from '../../../../theme';
import Text, { TextProps } from './Text';

export default {
  title: 'Core/Typography/Text',
  component: Text,
  argTypes: {
    scale: {
      options: [200, 300, 400, 500],
    },
    fontFamily: {
      options: Object.keys(theme.fonts),
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template: Story<TextProps> = ({ scale, fontFamily, fontWeight }) => (
  <Text onClick={action('button-click')} {...{ scale, fontFamily, fontWeight }}>
    We are making AI technology accessible to everyone
  </Text>
);

export const Example = Template.bind({});
Example.args = {
  scale: 400,
  fontFamily: 'system',
  fontWeight: 400,
};

export const MediaQueries = () => {
  return <Text scale={[400, 500]}>We are making AI technology accessible to everyone</Text>;
};
