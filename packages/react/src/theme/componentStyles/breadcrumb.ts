import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../system';

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
    fontSize: '14px',
    lineHeight: '20px',
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
          textDecoration: 'underline',
        },
        '&:hover': {
          color: active ? 'greydark02' : 'blue08',
        },
        '&:focus, &:active': {
          color: active ? 'greydark02' : 'blue09',
        },
      }),
      overflow: ({ active }: { theme: DefaultTheme; active?: boolean }) => ({
        display: 'block',
        py: 10,
        px: 12,
        color: active ? 'greydark02' : 'blue07',
        '&:hover, &:focus': {
          textDecoration: 'underline',
        },
        '&:hover': {
          backgroundColor: 'greylight03',
          color: active ? 'greydark02' : 'blue08',
        },
        '&:focus, &:active': {
          color: active ? 'greydark02' : 'blue09',
        },
      }),
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
