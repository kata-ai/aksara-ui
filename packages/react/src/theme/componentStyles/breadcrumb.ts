import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

const breadcrumbBase: ComponentThemeConfig = {
  baseStyle: {
    my: 6,
  },
};

const breadcrumbList: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    m: 0,
    p: 0,
    listStyleType: 'none',
    '> :not([hidden]) ~ :not([hidden])': {
      marginLeft: 'xxs',
    },
  },
};

const breadcrumbListItem: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    m: 0,
    p: 0,
    '> :not([hidden]) ~ :not([hidden])': {
      marginLeft: 'xxs',
    },
  },
};

const breadcrumbItem: ComponentThemeConfig = {
  baseStyle: {
    borderRadius: 4,
    outline: 'none',
    '&:focus': {
      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    },
  },
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: ({ active }: { theme: DefaultTheme; active?: boolean }) => ({
        display: 'inline-block',
        color: active ? 'greydark02' : 'blue07',
        '&:hover, &:focus': {
          textDecoration: active ? 'none' : 'underline',
        },
        '&:hover': {
          color: active ? 'greydark02' : 'blue08',
        },
        '&:focus, &:active': {
          color: active ? 'greydark02' : 'blue09',
        },
      }),
      overflow: {
        display: 'block',
        py: 10,
        px: 12,
        '&:hover': {
          backgroundColor: 'greylight03',
        },
      },
    },
  },
};

const breadcrumb = {
  breadcrumbBase,
  breadcrumbList,
  breadcrumbListItem,
  breadcrumbItem,
};

export default breadcrumb;
