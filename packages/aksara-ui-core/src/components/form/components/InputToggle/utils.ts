/* eslint-disable import/prefer-default-export */
import { ToggleSizes, ToggleSizeObject } from './types';

export function toggleButtonSizes(size: ToggleSizes): ToggleSizeObject {
  switch (size) {
    case 'sm': {
      return {
        width: 32,
        height: 16,
        switch: 12,
      };
    }
    case 'md': {
      return {
        width: 48,
        height: 24,
        switch: 20,
      };
    }
    default: {
      return {
        width: 48,
        height: 24,
        switch: 20,
      };
    }
  }
}
