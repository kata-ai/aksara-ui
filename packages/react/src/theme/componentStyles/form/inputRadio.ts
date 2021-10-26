import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig, ComponentThemeScaleFn } from '../../types';

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
  border: `1px solid ${theme.colors.greylight05}`,
  borderRadius: '50%',
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
    '--o': 1,
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
  '&:after': {
    opacity: 'var(--o, 0)',
  },
});

const inputRadioBase: ComponentThemeConfig = {
  baseStyle: inputRadioBaseStyle,
};

const inputRadio = {
  inputRadioBase,
};
export default inputRadio;
