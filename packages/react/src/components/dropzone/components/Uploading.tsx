/* eslint-disable react/require-default-props */
import React from 'react';
import { IconPage, IconTickRounded } from '@aksara-ui/icons';
import { Text, Heading } from '../../../typography';
import { Spinner } from '../../loading';
import { Box } from '../../../layout';
import { theme } from '../../../theme';

interface Props {
  file?: File;
  success?: boolean;
}

const DisplayFileName: React.FC<{ fileName?: string }> = ({ fileName }) => {
  return (
    <Text display="flex" scale={300} justifyContent="center" fontFamily="brand" color="grey07">
      <IconPage style={{ marginRight: '8px' }} /> {fileName}
    </Text>
  );
};

const Uploading: React.FC<Props> = ({ file, success }) => {
  const fileName = file && (file.name.length > 50 ? `${file.name.substring(0, 50)}...` : file.name);

  return (
    <Box display="flex" flexDirection="column" height={180} justifyContent="center">
      {success ? (
        <Box padding="lg">
          <IconTickRounded size={68} fill={theme.colors.green07} />
          <Heading fontFamily="brand" color={theme.colors.grey07} scale={500} fontWeight={700} mt={24}>
            File has been uploaded
          </Heading>
          <Box mt={32}>
            <DisplayFileName fileName={fileName} />
          </Box>
        </Box>
      ) : (
        <Box>
          <Spinner />
          <Box mt={24}>
            <DisplayFileName fileName={fileName} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Uploading;
