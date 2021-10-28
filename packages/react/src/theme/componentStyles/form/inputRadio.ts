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
  borderWidth: `var(--rbw,1px)`,
  borderColor: `var(--rbc,${theme.colors.greylight05})`,
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
  background: theme.colors.grey01,
  [pseudoSelectors._checked]: {
    background: theme.colors.blue01,
    borderWidth: `var(--rbw,'1px')`,
    '--rbw': '5px',
    '--rbc': theme.colors.blue07,
  },
  '&:hover': {
    '&:not(:checked)': {
      '&:not(:disabled)': {
        background: theme.colors.greylight03,
      },
    },
  },
  '&:focus': {
    borderColor: theme.colors.blue06,
  },
  '&:disabled': {
    cursor: 'not-allowed',
    background: theme.colors.greylight01,
  },
});

const radioInputBox: ComponentThemeConfig = {
  baseStyle: radioInputBoxStyle,
};

const inputRadio = {
  inputRadioBase,
  radioInputBox,
};
export default inputRadio;
