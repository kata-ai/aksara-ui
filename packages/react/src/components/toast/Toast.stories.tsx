import * as React from 'react';
import { Box } from '../../layout';
import useToast from './useToast';

export default {
  title: 'Core/Components/Toast',
};

export const Example = () => {
  const { addToast } = useToast();
  return (
    <Box>
      <button type="button" onClick={() => addToast({ message: 'hello' })}>
        Add toast
      </button>
    </Box>
  );
};
