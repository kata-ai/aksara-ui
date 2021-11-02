import * as React from 'react';
import { render } from '@testing-library/react';
import Uploading from './Uploading';
import { UploadBox } from './UploadBox';

describe('components/UploadBox', () => {
  describe('<UploadBox />', () => {
    test('renders correctly', () => {
      const { container } = render(
        <UploadBox
          allowFileType={'.txt'}
          onFileAccepted={() => {
            return true;
          }}
          successUpload={() => {
            return true;
          }}
          failedUpload={() => {
            return true;
          }}
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders allowed file extensions', () => {
      const { getByText } = render(
        <UploadBox
          allowFileType={'.txt'}
          onFileAccepted={() => {
            return true;
          }}
          successUpload={() => {
            return true;
          }}
          failedUpload={() => {
            return true;
          }}
        />
      );
      expect(getByText('Allowed file extensions: .txt')).toBeInTheDocument();
    });

    test('renders template url', () => {
      const { getByTestId } = render(
        <UploadBox
          allowFileType={'.txt'}
          templateUrl="https://kata.ai"
          onFileAccepted={() => {
            return true;
          }}
          successUpload={() => {
            return true;
          }}
          failedUpload={() => {
            return true;
          }}
        />
      );
      expect(getByTestId('download-template')).toBeInTheDocument();
    });

    test('renders max file size', () => {
      const { getByText } = render(
        <UploadBox
          allowFileType={'.txt'}
          maxFileSize={15 * 100000}
          templateUrl="https://kata.ai"
          onFileAccepted={() => {
            return true;
          }}
          successUpload={() => {
            return true;
          }}
          failedUpload={() => {
            return true;
          }}
        />
      );
      expect(getByText('Allowed file extensions: .txt | Max file size: 1.50 MB')).toBeInTheDocument();
    });
  });
  describe('<Uploading />', () => {
    test('renders correctly', () => {
      const { container } = render(<Uploading success={false} />);

      expect(container.firstChild).toBeInTheDocument();
    });

    test('renders file has been uploaded', () => {
      const { getByText } = render(<Uploading success />);

      expect(getByText('File has been uploaded')).toBeInTheDocument();
    });

    test('renders percentage uploading', () => {
      const { getByText } = render(<Uploading success={false} percentage={60} />);

      expect(getByText('60% Uploading...')).toBeInTheDocument();
    });
  });
});
