import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../system';

const tabButton: ComponentThemeConfig = {
  baseStyle: ({ isActive }: { theme: DefaultTheme; isActive: boolean }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    py: 'xxs',
    outline: 'none',
    transition: 'all 0.2s ease 0s',
    borderBottom: '2px solid',
    borderBottomColor: isActive ? 'blue07' : 'transparent',
    '> :not([hidden])': {
      backgroundColor: isActive ? 'blue01' : 'transparent',
      color: isActive ? 'blue07' : 'greydark02',
    },
    '&:hover': {
      '> :not([hidden])': {
        backgroundColor: isActive ? 'blue01' : 'greylight03',
        color: isActive ? 'blue07' : 'greydark02',
      },
    },
    '&:focus, &:active': {
      borderBottomColor: isActive ? 'blue07' : '#3797FF',
      '> :not([hidden])': {
        backgroundColor: isActive ? 'blue01' : 'greylight03',
        color: isActive ? 'blue07' : 'greydark02',
      },
    },
  }),
};

const tabButtonInner: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 'md',
    py: 'xs',
    fontSize: '14px',
    lineHeight: '16px',
    borderRadius: 12,
  },
};

const tabList: ComponentThemeConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '> :not([hidden]) ~ :not([hidden])': {
      marginLeft: 2,
    },
  },
};

const tabs = {
  tabButton,
  tabButtonInner,
  tabList,
};

export default tabs;
