export type ToggleSizes = 'sm' | 'md';

export type ToggleSizeObject = {
  width: number;
  height: number;
  switch: number;
};

export interface InputToggleInnerProps {
  inputSize: ToggleSizeObject;
}
