/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import { FileRejection, useDropzone, DropzoneProps } from 'react-dropzone';
import UploadIcon from './UploadIcon';
import Uploading from './Uploading';
import ErrorMessage from './ErrorMessage';
import { Heading, Text, Anchor } from '../../../typography';
import { Box } from '../../../layout';

export interface UploadBoxProps extends DropzoneProps {
  /** allowed file type refer to https://react-dropzone.js.org/#section-accepting-specific-file-types required */
  allowFileType: string;
  /** on Drop function */
  onDrop?: () => void;
  /** on DropAccepted function, invoked on correct file type */
  onFileAccepted: () => void;
  /** on DropRejected function, invoked on false file type */
  onFileRejected?: () => void;
  /** on success upload function, to set success view */
  successUpload: () => boolean;
  /** on failed upload function, to set back again to upload view */
  failedUpload: () => boolean;
  /** on failed upload function, to set back again to upload view */
  resetUpload?: () => boolean;
  /** allowed maximum file size in Bytes */
  maxFileSize?: number;
  /** allowed minimum file size in Bytes, default 0.1 */
  minFileSize?: number;
  /** allowed multiple items */
  allowMultiple?: boolean;
  /** disable click to select file on container, default true */
  noClick?: boolean;
  /** disable using space/enter to select file on container, default false */
  noKeyboard?: boolean;
  /** disable drag on drop, default false */
  noDrag?: boolean;
  /** url template if available */
  templateUrl?: string;
  /** set width of UploadBox */
  width?: number | string;
  /** set height of UploadBox */
  height?: number | string;
  /** set max files, default 0 (unlimited) */
  maxFiles?: number;
  /** set percentage of progress upload */
  percentage?: number;
}

export const UploadBox: React.FC<UploadBoxProps> = ({
  allowFileType,
  maxFileSize,
  minFileSize = 0.01,
  onFileAccepted,
  onFileRejected,
  successUpload,
  failedUpload,
  resetUpload,
  allowMultiple,
  noClick = true,
  noKeyboard,
  noDrag,
  templateUrl,
  width,
  height,
  maxFiles = 0,
  percentage,
  ...rest
}) => {
  const [uploading, setUploading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [fileHover, setFileHover] = React.useState(false);
  const [file, setFile] = React.useState<File>();

  const errorUpload = errorMessage !== '';

  const maxFileSizeText = (fileSize: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(fileSize) / Math.log(1000));
    return `${Number(fileSize / 1000 ** i).toFixed(2)} ${sizes[i]}`;
  };

  function onDropRejected(files: FileRejection[]) {
    setFileHover(false);
    setErrorMessage('');
    if (onFileRejected) {
      onFileRejected();
    }
    if (files[0] !== null) {
      if (files[0].errors.length === 2) {
        setErrorMessage(files[0].errors[1].message);
      } else {
        setErrorMessage(files[0].errors[0].message);
      }
    }
  }

  async function onDropAccepted(files: File[]) {
    setErrorMessage('');
    setFileHover(false);
    setFile(files[0]);
    setSuccess(false);
    setUploading(true);
    onFileAccepted();
  }

  function onDragEnter() {
    setFileHover(true);
  }

  function onDragLeave() {
    setFileHover(false);
  }

  const setBorderColor = () => {
    if (errorUpload) {
      return 'red06';
    }
    if (fileHover) {
      return 'blue02';
    }
    return 'grey03';
  };

  function onResetUpload() {
    setFileHover(false);
    setErrorMessage('');
    setSuccess(false);
    setUploading(false);
    setFile(undefined);
  }

  React.useEffect(() => {
    if (successUpload) {
      setSuccess(successUpload);
    }
    if (failedUpload()) {
      setSuccess(false);
    }
    if (resetUpload && resetUpload() === true) {
      onResetUpload();
    }
  }, [successUpload, failedUpload, resetUpload]);

  function fileValidator(fileParam: File) {
    if (maxFileSize && fileParam.size > maxFileSize) {
      return {
        code: 'file-too-large',
        message: `File size is larger than ${maxFileSizeText(maxFileSize)}`,
      };
    }
    if (fileParam.size < minFileSize) {
      return {
        code: 'file-too-small',
        message: `File is empty`,
      };
    }
    return null;
  }

  const { getRootProps, getInputProps, open } = useDropzone({
    onDropAccepted,
    onDropRejected,
    onDragEnter,
    onDragLeave,
    accept: allowFileType,
    maxSize: maxFileSize,
    minSize: minFileSize,
    multiple: allowMultiple,
    noClick,
    noKeyboard,
    noDrag,
    maxFiles,
    validator: fileValidator,
    ...rest,
  });

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={width || 'inherit'}
        height={height || 'inherit'}
        color="grey06"
        borderStyle="dashed"
        borderColor={setBorderColor()}
        backgroundColor={fileHover ? 'blue01' : 'white'}
        textAlign="center"
        position="relative"
        outline="none"
        borderRadius="lg"
        cursor="pointer"
        padding="lg"
        {...getRootProps()}
      >
        {uploading ? (
          <Uploading file={file} success={success} percentage={percentage} />
        ) : (
          <>
            <Box width={'inherit'}>
              <input {...getInputProps()} />
              <UploadIcon size={85} />
              <Heading pt="lg" scale={600} fontWeight={700} color="grey08">
                Drop file here or <Anchor onClick={open}>browse</Anchor>
              </Heading>
              <Box width="80%" m="0 auto">
                <Text as="p" scale={300} fontWeight={400} mt="lg" color="grey07" lineHeight="20px">
                  {allowFileType && `Allowed file extensions: ${allowFileType}`}{' '}
                  {maxFileSize && `| Max file size: ${maxFileSizeText(maxFileSize)}`}{' '}
                </Text>
                {templateUrl && (
                  <Text
                    data-testid="download-template"
                    as="p"
                    scale={300}
                    fontWeight={400}
                    color="grey07"
                    lineHeight="20px"
                  >
                    Download the{' '}
                    <Anchor href={templateUrl} target="_blank">
                      template file
                    </Anchor>{' '}
                    to see the format required.
                  </Text>
                )}
              </Box>
            </Box>
            <Box mt="md">
              <ErrorMessage error={errorUpload} errorMessage={errorMessage} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
