import * as React from 'react';

import { Button } from '../button';
import useToast from './useToast';

export default {
  title: 'Core/Components/useToast',
  component: [useToast],
};

export const BasicExample = () => {
  const toast = useToast();

  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            message: 'Hello world! This is a toaster',
            dismissible: true,
            dismissAfter: 5000,
          });
        }}
        style={{ marginRight: 8 }}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            message: 'Hello world! This is a toaster',
            status: 'success',
            dismissible: true,
            dismissAfter: 5000,
          });
        }}
        style={{ marginRight: 8 }}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            message: 'Hello world! This is a toaster',
            status: 'warning',
            dismissible: true,
            dismissAfter: 5000,
          });
        }}
        style={{ marginRight: 8 }}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            message: 'Hello world! This is a toaster',
            status: 'error',
            dismissible: true,
            dismissAfter: 5000,
          });
        }}
      >
        Error
      </Button>
    </>
  );
};
