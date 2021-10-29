import { Story } from '@storybook/react';
import * as React from 'react';
import { Button } from '../button';
import { Box } from '../../layout';

import { UploadBox, UploadBoxProps } from './components/UploadBox';

export default {
  title: 'Core/Components/Dropzone',
  component: [UploadBox],
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    maxFileSize: {
      control: 'number',
    },
    allowFileType: {
      control: 'text',
    },
    templateUrl: {
      control: 'text',
    },
    noClick: {
      control: 'boolean',
    },
    noDrag: {
      control: 'boolean',
    },
  },
};

export const Example: Story<UploadBoxProps> = ({
  width,
  height,
  maxFileSize,
  allowFileType,
  templateUrl,
  noClick,
  noDrag,
}) => {
  const [success, setSuccess] = React.useState(false);
  const [resetUpload, setResetUpload] = React.useState(false);
  return (
    <Box width={500} display="flex" flexDirection="column" alignItems="center">
      <UploadBox
        allowFileType={allowFileType}
        width={width}
        height={height}
        maxFileSize={maxFileSize}
        templateUrl={templateUrl}
        onFileAccepted={() => setTimeout(() => setSuccess(true), 5000)}
        percentage={50}
        successUpload={() => {
          return success;
        }}
        failedUpload={() => {
          return !success;
        }}
        resetUpload={() => {
          return resetUpload;
        }}
        noClick={noClick}
        noDrag={noDrag}
      />
      <Box mt={24}>
        <Button
          variant="primary"
          onClick={() => {
            setResetUpload(true);
            setSuccess(false);
            setTimeout(() => {
              setResetUpload(false);
            }, 2000);
          }}
        >
          Reset upload
        </Button>
      </Box>
    </Box>
  );
};

Example.args = {
  maxFileSize: 15 * 100000,
  noClick: true,
  noDrag: false,
  allowFileType: '.pdf, .jpg, .jpeg',
  templateUrl: '',
};
