/* eslint-disable import/prefer-default-export */
import { ToggleSizes, ToggleSizeObject } from './types';

export function toggleButtonSizes(size: ToggleSizes): ToggleSizeObject {
  if (size === 'sm') {
    return {
      width: 32,
      height: 16,
      switch: 12,
    };
  }

  return {
    width: 48,
    height: 24,
    switch: 20,
  };
}
