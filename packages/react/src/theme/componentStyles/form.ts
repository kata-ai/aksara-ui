import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

const inputBase = (theme: DefaultTheme) => ({
  appearance: 'none',
  backgroundColor: `var(--aks-form-bg-color, ${theme.colors.greylight01})`,
  borderColor: `var(--aks-form-border-color, ${theme.colors.greylight05})`,
  borderWidth: '1px',
  borderRadius: 8,
  borderStyle: 'solid',
  color: theme.colors.greydark02,
  display: 'block',
  fontSize: '12px',
  lineHeight: '18px',
  padding: 0,
  '--aks-shadow': '0 0 #0000',
});

const inputFocusBase = (theme: DefaultTheme) => ({
  outline: '2px solid transparent',
  'outline-offset': '2px',
  '--aks-ring-inset': 'var(--empty,/*!*/ /*!*/)',
  '--aks-ring-width': '2px',
  '--aks-ring-offset-width': '0px',
  '--aks-ring-offset-color': '#fff',
  '--aks-ring-color': transparentize(0.7, theme.colors.blue07),
  '--aks-ring-offset-shadow': 'var(--aks-ring-inset) 0 0 0 var(--aks-ring-offset-width) var(--aks-ring-offset-color)',
  '--aks-ring-shadow': `var(--aks-ring-inset) 0 0 0 calc(var(--aks-ring-width) + var(--aks-ring-offset-width)) var(--aks-ring-color)`,
  'box-shadow': 'var(--aks-ring-offset-shadow), var(--aks-ring-shadow), var(--aks-shadow)',
});

const inputText: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputBase(theme),
    '&:focus': {
      ...inputFocusBase(theme),
    },
    '&[disabled]': {
      '--aks-form-bg-color': theme.colors.greylight02,
      '--aks-form-border-color': transparentize(0.5, theme.colors.greylight05),
      color: theme.colors.greymed01,
      cursor: 'not-allowed',
      '&::placeholder': {
        color: theme.colors.greymed01,
      },
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
          '--aks-form-bg-color': theme.colors.greylight01,
          '--aks-form-border-color': theme.colors.greylight05,
          '&:hover': {
            '--aks-form-bg-color': theme.colors.greylight03,
            '--aks-form-border-color': theme.colors.greymed01,
          },
          '&:focus, &:active': {
            '--aks-form-bg-color': theme.colors.greylight01,
            '--aks-form-border-color': theme.colors.blue06,
            '--aks-ring-color': transparentize(0.3, theme.colors.blue03),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--aks-form-bg-color': theme.colors.red01,
          '--aks-form-border-color': theme.colors.red07,
          '&:hover': {
            '--aks-form-bg-color': theme.colors.red01,
            '--aks-form-border-color': theme.colors.red07,
          },
          '&:focus, &:active': {
            '--aks-form-bg-color': theme.colors.red01,
            '--aks-form-border-color': theme.colors.red07,
            '--aks-ring-color': transparentize(0.7, theme.colors.red07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
    },
  },
};

const inputTextarea: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputBase(theme),
    '&:focus': {
      ...inputFocusBase(theme),
    },
    '&[disabled]': {
      '--aks-form-bg-color': theme.colors.greylight02,
      '--aks-form-border-color': transparentize(0.5, theme.colors.greylight05),
      color: theme.colors.greymed01,
      cursor: 'not-allowed',
      '&::placeholder': {
        color: theme.colors.greymed01,
      },
    },
  }),
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--aks-form-bg-color': theme.colors.greylight01,
          '--aks-form-border-color': theme.colors.greylight05,
          '&:hover': {
            '--aks-form-bg-color': theme.colors.greylight03,
            '--aks-form-border-color': theme.colors.greymed01,
          },
          '&:focus, &:active': {
            '--aks-form-bg-color': theme.colors.greylight01,
            '--aks-form-border-color': theme.colors.blue06,
            '--aks-ring-color': transparentize(0.3, theme.colors.blue03),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--aks-form-bg-color': theme.colors.red01,
          '--aks-form-border-color': theme.colors.red07,
          '&:hover': {
            '--aks-form-bg-color': theme.colors.red01,
            '--aks-form-border-color': theme.colors.red07,
          },
          '&:focus, &:active': {
            '--aks-form-bg-color': theme.colors.red01,
            '--aks-form-border-color': theme.colors.red07,
            '--aks-ring-color': transparentize(0.7, theme.colors.red07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
    },
  },
};

const inputMessage: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        color: 'greymed05',
      },
      success: {
        color: 'green08',
      },
      warning: {
        color: 'yellow08',
      },
      critical: {
        color: 'red07',
      },
      info: {
        color: 'indigo06',
      },
    },
  },
};

const form = {
  inputText,
  inputTextarea,
  inputMessage,
};

export default form;
