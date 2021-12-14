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
      icon={
        <svg height={40} viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28.96 33.227l-1.978-2.59a3.312 3.312 0 010-4.026l1.889-2.473c2.194-2.871 1.83-7.028-.963-9.333a6.667 6.667 0 00-9.537 1.098l-1.38 1.793v19.625c0 .663-.1 1.322-.295 1.955l1.596 2.09a6.665 6.665 0 009.369 1.254l.062-.044a6.667 6.667 0 001.238-9.349z"
            fill="#FFF"
          />
          <path
            d="M10.332 4a6.666 6.666 0 00-6.666 6.666v26.666a6.666 6.666 0 0013.036 1.955l-1.487-1.955h-4.889l2.765-2.765-1.41-1.844a6.633 6.633 0 010-8.056l5.31-6.955v-7.044A6.666 6.666 0 0010.326 4L10.332 4z"
            fill="#FFF"
          />
        </svg>
      }
      actions={
        <ButtonGroup size="md">
          <Button type="button">Label</Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
    />
  );
};
