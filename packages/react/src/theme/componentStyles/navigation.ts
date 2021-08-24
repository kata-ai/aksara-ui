/* eslint-disable no-nested-ternary */
import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

const primaryNavItem: ComponentThemeConfig = {
  baseStyle: ({ disabled, isActive }: { theme: DefaultTheme; disabled?: boolean; isActive?: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: disabled ? 'greylight01' : isActive ? 'blue01' : 'transparent',
    color: disabled ? 'greymed01' : isActive ? 'blue07' : 'greymed04',
    '&:hover, &:focus': {
      color: disabled ? 'greymed01' : isActive ? 'blue07' : 'greymed04',
    },
    ...(!disabled
      ? {
          '&:focus': {
            boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
          },
        }
      : {}),
    ...(!disabled && !isActive
      ? {
          '&:hover': {
            backgroundColor: 'greylight03',
          },
          '&:active': {
            backgroundColor: 'blue02',
          },
        }
      : {}),
  }),
  propToScaleMap: [['size', 'sizes']],
  scales: {
    sizes: {
      sm: {},
      md: {},
      lg: {
        width: 56,
        height: 56,
        borderRadius: '12px',
        '> svg': {
          size: 24,
        },
      },
    },
  },
};

const navigation = {
  primaryNavItem,
};

export default navigation;
