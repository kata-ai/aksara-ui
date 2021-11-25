import { transparentize } from 'polished';
import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../../system';

const inputSelectBase = (theme: DefaultTheme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingLeft: '12px',
  backgroundColor: theme.colors.grey01,
  border: '1px solid',
  borderColor: theme.colors.grey04,
  borderRadius: '8px',
  outline: 'none',
});

const inputSelect: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputSelectBase(theme),
    '&[disabled]': {
      backgroundColor: theme.colors.greylight02,
      border: '1px solid',
      borderColor: transparentize(0.5, theme.colors.greylight05),
      color: theme.colors.greymed01,
      cursor: 'not-allowed',
    },
  }),
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      md: {
        height: '32px',
      },
      lg: {
        height: '40px',
      },
    },
    variants: {
      default: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '&:focus, &:active': {
            outline: 'none',
            borderColor: theme.colors.blue06,
            boxShadow: `0 0 0 2px ${transparentize(0.7, theme.colors.blue03)}`,
            '&:hover': {
              backgroundColor: theme.colors.greylight01,
              borderColor: theme.colors.blue06,
              boxShadow: `0 0 0 2px ${transparentize(0.7, theme.colors.blue03)}`,
            },
          },
          '&:hover': {
            borderColor: theme.colors.greymed01,
            backgroundColor: theme.colors.greylight03,
          },
        },
      }),
      active: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          outline: 'none',
          borderColor: theme.colors.blue06,
          boxShadow: `0 0 0 2px ${transparentize(0.7, theme.colors.blue03)}`,
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          backgroundColor: theme.colors.red01,
          borderColor: theme.colors.red07,
        },
      }),
    },
  },
};

const formSelect = {
  inputSelect,
};

export default formSelect;
