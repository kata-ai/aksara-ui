/* eslint-disable no-nested-ternary */
import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../system';

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

const secondaryNavItem: ComponentThemeConfig = {
  baseStyle: ({ disabled, isActive }: { theme: DefaultTheme; disabled?: boolean; isActive?: boolean }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: '272px',
    borderRadius: 12,
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: disabled ? 'greylight01' : isActive ? 'blue01' : 'transparent',
    color: disabled ? 'greymed01' : isActive ? 'blue07' : 'greymed04',
    '&:hover, &:focus': {
      color: disabled ? 'greymed01' : isActive ? 'blue07' : 'greymed04',
    },
    px: 'md',
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
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      disclosure: {
        height: '36px',
      },
      default: {
        height: '40px',
      },
    },
  },
};

const navItemBadge: ComponentThemeConfig = {
  baseStyle: ({ disabled, isActive }: { theme: DefaultTheme; disabled?: boolean; isActive?: boolean }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 200,
    fontWeight: 500,
    px: 'xs',
    height: '24px',
    borderRadius: '24px',
    backgroundColor: isActive ? 'blue02' : 'greylight04',
    color: disabled ? 'greymed01' : isActive ? 'blue07' : 'greymed04',
  }),
};

const navigation = {
  primaryNavItem,
  secondaryNavItem,
  navItemBadge,
};

export default navigation;
