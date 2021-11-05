/* eslint-disable react/require-default-props */
import React from 'react';
import { IconPage, IconTickRounded } from '@aksara-ui/icons';
import { Text, Heading } from '../../../typography';
import { Spinner } from '../../loading';
import { Box } from '../../../layout';
import { theme } from '../../../theme';
import Progress from './Progress';

interface UploadingProps {
  file?: File;
  success?: boolean;
  percentage?: number;
  variant: 'small' | 'large';
}

interface DisplayFileNameProps {
  fileName?: string;
}

const DisplayFileName: React.FC<DisplayFileNameProps> = ({ fileName }) => {
  return (
    <Text display="flex" scale={300} justifyContent="center" fontFamily="brand" color="grey07">
      <IconPage style={{ marginRight: '8px' }} /> {fileName}
    </Text>
  );
};

const Uploading: React.FC<UploadingProps> = ({ file, success, percentage, variant }) => {
  const fileName = file && (file.name.length > 50 ? `${file.name.substring(0, 50)}...` : file.name);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="inherit"
      height="inherit"
      minHeight={variant === 'large' ? 180 : null}
      justifyContent="center"
    >
      {success ? (
        <Box padding="lg">
          {variant === 'large' && <IconTickRounded size={68} fill={theme.colors.green07} />}
          <Heading
            fontFamily="brand"
            color={theme.colors.greydark02}
            scale={500}
            fontWeight={700}
            mt={variant === 'large' ? 24 : null}
          >
            File has been uploaded
          </Heading>
          <Box mt={variant === 'large' ? 24 : 8}>
            <DisplayFileName fileName={fileName} />
          </Box>
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          {variant === 'small' && <Spinner />}
          {variant === 'large' && (
            <Text color={theme.colors.greydark02}>{percentage && `${percentage}% Uploading...`}</Text>
          )}
          <Box width="100%" mt={12}>
            {percentage && variant === 'large' && <Progress percentage={percentage} />}
            {variant === 'small' && (
              <Text color={theme.colors.greydark02}>{percentage && `Uploading... ${percentage}%`}</Text>
            )}
          </Box>
          {variant === 'large' && (
            <Box mt={24}>
              <DisplayFileName fileName={fileName} />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Uploading;
