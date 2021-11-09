/* eslint-disable no-nested-ternary */
import React from 'react';
import { Message } from '../../message';

interface Props {
  error: boolean;
  errorMessage: string;
}

const ErrorMessage: React.FC<Props> = ({ error, errorMessage }) => {
  return (
    <>
      {error && (
        <Message
          message={errorMessage !== '' ? `${errorMessage}` : ''}
          variant="critical"
          style={{ marginBottom: '14px' }}
        />
      )}
    </>
  );
};

export default ErrorMessage;
