// TODO: rename to `componentStyles/form/index.ts`
import { transparentize } from 'polished';
import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../system';
import formToggle from './form/toggle';

// TODO: move to `componentStyles/form/utils.ts`
const inputBase = (theme: DefaultTheme, rounded = false) => ({
  appearance: 'none',
  backgroundColor: `var(--aks-form-bg-color, ${theme.colors.greylight01})`,
  borderColor: `var(--aks-form-border-color, ${theme.colors.greylight05})`,
  borderWidth: '1px',
  borderRadius: rounded ? 9999 : 8,
  borderStyle: 'solid',
  color: theme.colors.greydark02,
  display: 'block',
  fontSize: '12px',
  lineHeight: '18px',
  padding: 0,
  '--aks-shadow': '0 0 #0000',
});

const inputSelectBase = (theme: DefaultTheme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingLeft: '16px',
  backgroundColor: theme.colors.grey01,
  border: '1px solid',
  borderColor: theme.colors.grey04,
  borderRadius: '8px',
  outline: 'none',
});

// TODO: move to `componentStyles/form/utils.ts`
const inputFocusBase = (theme: DefaultTheme) => ({
  outline: '2px solid transparent',
  'outline-offset': '2px',
  '--aks-ring-inset': 'var(--aks-empty,/*!*/ /*!*/)',
  '--aks-ring-width': '2px',
  '--aks-ring-offset-width': '0px',
  '--aks-ring-offset-color': '#fff',
  '--aks-ring-color': transparentize(0.7, theme.colors.blue07),
  '--aks-ring-offset-shadow': 'var(--aks-ring-inset) 0 0 0 var(--aks-ring-offset-width) var(--aks-ring-offset-color)',
  '--aks-ring-shadow': `var(--aks-ring-inset) 0 0 0 calc(var(--aks-ring-width) + var(--aks-ring-offset-width)) var(--aks-ring-color)`,
  'box-shadow': 'var(--aks-ring-offset-shadow), var(--aks-ring-shadow), var(--aks-shadow)',
});

// TODO: move to `componentStyles/form/text.ts`
const inputText: ComponentThemeConfig = {
  baseStyle: ({ theme, rounded }: { theme: DefaultTheme; rounded?: boolean }) => ({
    ...inputBase(theme, rounded),
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

// TODO: move to `componentStyles/form/textarea.ts`
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

// TODO: move to `componentStyles/form/tags.ts`
const inputTags: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputBase(theme),
    '&:focus-within, &:focus, &:active': {
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
          '&:focus-within, &:focus, &:active': {
            '--aks-form-bg-color': theme.colors.greylight01,
            '--aks-form-border-color': theme.colors.blue07,
            '--aks-ring-color': transparentize(0.7, theme.colors.blue07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      focused: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--aks-form-bg-color': theme.colors.greylight01,
          '--aks-form-border-color': theme.colors.blue07,
          '--aks-ring-color': transparentize(0.7, theme.colors.blue07),
          '&:hover, &:focus-within, &:focus, &:active': {
            '--aks-form-bg-color': theme.colors.greylight01,
            '--aks-form-border-color': theme.colors.blue07,
            '--aks-ring-color': transparentize(0.7, theme.colors.blue07),
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
          '&:focus-within, &:focus, &:active': {
            '--aks-form-bg-color': theme.colors.red01,
            '--aks-form-border-color': theme.colors.red07,
            '--aks-ring-color': transparentize(0.7, theme.colors.red07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      disabled: ({ theme }: { theme: DefaultTheme }) => ({
        '--aks-form-bg-color': theme.colors.greylight02,
        '--aks-form-border-color': transparentize(0.5, theme.colors.greylight05),
        color: theme.colors.greymed01,
        cursor: 'not-allowed',
        '&::placeholder': {
          color: theme.colors.greymed01,
        },
      }),
    },
  },
};

const inputSelect: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputSelectBase(theme),
    '&[disabled]': {
      background: theme.colors.greylight02,
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
          },
          '&:hover': {
            borderColor: theme.colors.greymed01,
            background: theme.colors.greylight03,
          },
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          background: theme.colors.red01,
          borderColor: theme.colors.red07,
        },
      }),
    },
  },
};

// TODO: move to `componentStyles/form/message.ts`
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
  inputTags,
  inputMessage,
  inputSelect,
  ...formToggle,
};

export default form;
