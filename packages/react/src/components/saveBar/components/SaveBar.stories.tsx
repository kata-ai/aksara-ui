import { Story } from '@storybook/react';
import * as React from 'react';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import SaveBar, { SaveBarProps } from './SaveBar';

export default {
  title: 'Core/Components/SaveBar',
  component: SaveBar,
};

export const Example: Story<SaveBarProps> = () => {
  return (
    <SaveBar
      maxWidth="800px"
      label="Unsaved Changes"
      actions={
        <ButtonGroup size="md">
          <Button type="button">Label</Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
    />
  );
};
