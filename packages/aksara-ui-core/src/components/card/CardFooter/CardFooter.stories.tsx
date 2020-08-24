import * as React from 'react';
import { action } from '@storybook/addon-actions';
import CardFooter from './CardFooter';
import { SystemWrapper } from '../../../utils/storybook';
import { Button } from '../../button';

export default {
  title: 'Core|Components/Card/CardFooter',
  component: CardFooter,
  decorators: [SystemWrapper],
};

export const Example = () => {
  return (
    <CardFooter display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
      <Button variant="outline" onClick={action('secondary-button-click')}>
        Secondary
      </Button>
      <Button variant="primary" onClick={action('primary-button-click')}>
        Primary
      </Button>
    </CardFooter>
  );
};
