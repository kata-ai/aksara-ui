# Dropzone

Drag 'n drop file or click `browse` to select file to be selected

## Usage

```tsx
import { UploadBox } from '@aksara-ui/react';

export default function Component() {
  return (
    <UploadBox
      allowFileType={allowFileType}
      width={width}
      height={height}
      maxFileSize={maxFileSize}
      templateUrl={templateUrl}
      onFileAccepted={() => setTimeout(() => setSuccess(true), 3000)}
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
  );
}
```

### Props

#### `<UploadBox />`

| Property       | Type          | Required | Default                  | Description                                                         |
| -------------- | ------------- | -------- | ------------------------ | ------------------------------------------------------------------- |
| allowFileType  | string        | true     | undefined                | File type that allowed to be selected                               |
| onFileAccepted | () => void    | true     | undefined                | Set function if file accepted criteria                              |
| onFileRejected | () => void    | -        | set all state to default | Set function if file rejected                                       |
| successUpload  | () => boolean | true     | undefined                | Return a boolean if upload succeeded                                |
| failedUpload   | () => boolean | true     | undefined                | Return a boolean if upload failed                                   |
| resetUpload    | () => boolean | -        | undefined                | Set function and return a booolean to reset upload box              |
| maxFileSize    | number        | -        | undefined                | Set maximum file size (in Bytes)                                    |
| minFileSize    | number        | -        | 0.1                      | Set minimum file size (in Bytes)                                    |
| allowMultiple  | boolean       | -        | false                    | Allow multiple files to be selected                                 |
| noClick        | boolean       | -        | true                     | Set upload box unable to select file by click                       |
| noDrag         | boolean       | -        | false                    | Set upload box unable to drag 'n drop file                          |
| noKeyboard     | boolean       | -        | false                    | Set upload box unable select file by press enter/space button       |
| templateUrl    | string        | -        | undefined                | Set template url file to download if any                            |
| maxFiles       | number        | -        | undefined                | Set maximum file that able to upload (allowMultiple must be `true`) |
| width          | number        | -        | undefined                | Set width of upload box                                             |
| height         | number        | -        | undefined                | Set height of upload box                                            |
