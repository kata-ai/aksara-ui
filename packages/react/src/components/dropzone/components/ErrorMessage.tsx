/* eslint-disable no-nested-ternary */
import React from 'react';
import { Message } from '../../message';

interface Props {
  error: boolean;
  fileEmpty: boolean;
  errorMessage: string;
}

const ErrorMessage: React.FC<Props> = ({ error, fileEmpty, errorMessage }) => {
  return (
    <>
      {error && (
        <Message
          message={errorMessage !== '' ? `${errorMessage}` : fileEmpty ? 'Your .txt file is empty' : ''}
          variant="critical"
          style={{ marginBottom: '14px' }}
        />
      )}
    </>
  );
};

export default ErrorMessage;
