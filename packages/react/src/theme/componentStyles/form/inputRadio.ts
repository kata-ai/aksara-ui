/* eslint-disable no-underscore-dangle */
import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig, ComponentThemeScaleFn, pseudoSelectors } from '../../../system';

const inputRadioBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'top',
  width: '16px',
  height: '16px',
  margin: 0,
  cursor: 'pointer',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  outline: 'none',
  borderStyle: 'solid',
  borderRadius: '50%',
  borderWidth: '1px',
  borderColor: theme.colors.greylight05,
  background: theme.colors.grey01,
  '&:hover': {
    '&:not(:checked)': {
      '&:not(:disabled)': {
        borderColor: theme.colors.greymed01,
        background: theme.colors.greylight03,
      },
    },
  },
  '&:focus': {
    borderColor: theme.colors.blue06,
    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    '&:hover': {
      boxShadow: 'none',
    },
  },
  '&:checked': {
    borderWidth: '5px',
    borderColor: theme.colors.blue07,
    '&:hover': {
      borderColor: theme.colors.blue08,
    },
    '&:focus': {
      borderColor: theme.colors.blue09,
    },
    '&:disabled': {
      borderColor: theme.colors.greylight05,
      background: theme.colors.greylight02,
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    borderColor: 'rgba(198, 208, 219, 0.5)',
    background: theme.colors.greylight02,
  },
});

const inputRadioBase: ComponentThemeConfig = {
  baseStyle: inputRadioBaseStyle,
};

const radioInputBoxStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  display: 'flex',
  p: 'xs',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  borderRadius: '12px',
  border: '1px solid transparent',
  background: theme.colors.grey01,
  [pseudoSelectors._checked]: {
    background: theme.colors.blue01,
    '& > input': {
      borderWidth: '5px',
      borderColor: theme.colors.blue07,
      '&:hover': {
        borderColor: theme.colors.blue08,
      },
      '&:focus': {
        borderColor: theme.colors.blue09,
      },
      '&:disabled': {
        borderColor: theme.colors.greylight05,
        background: theme.colors.greylight02,
      },
    },
  },
  '&:hover': {
    [`&:not([aria-checked=true])`]: {
      borderColor: 'transparent',
      background: theme.colors.greylight03,
    },
  },
  '&:focus': {
    border: '1px solid rgba(175, 214, 255, 0.7)',
  },
  [pseudoSelectors._disabled]: {
    cursor: 'not-allowed',
    background: theme.colors.greylight01,
    color: 'greymed01',
    '& > input': {
      cursor: 'not-allowed',
      borderColor: 'rgba(198, 208, 219, 0.5)',
      background: theme.colors.greylight02,
    },
  },
});

const withIndicatorStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  border: `1px solid ${theme.colors.greylight04}`,
  borderRadius: 'lg',
  py: 'xs',
  px: 'sm',
  [pseudoSelectors._checked]: {
    borderColor: 'transparent',
  },
  '&:focus': {
    border: '1px solid rgba(175, 214, 255, 0.7)',
  },
  [pseudoSelectors._disabled]: {
    borderColor: 'transparent',
    cursor: 'not-allowed',
    background: theme.colors.greylight02,
  },
});
const radioInputBox: ComponentThemeConfig = {
  baseStyle: radioInputBoxStyle,
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      simple: {},
      'with-indicator': withIndicatorStyle,
    },
  },
};

const inputRadio = {
  inputRadioBase,
  radioInputBox,
};
export default inputRadio;
