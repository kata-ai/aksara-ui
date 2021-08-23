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
      ml: 'xxs',
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
      ml: 'xxs',
    },
  },
};

const breadcrumb = {
  breadcrumbBase,
  breadcrumbList,
  breadcrumbListItem,
};

export default breadcrumb;
