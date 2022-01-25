/* eslint-disable no-underscore-dangle */
import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig, ComponentThemeScaleFn } from '../../../system';

const checkboxContainerBaseStyle: ComponentThemeScaleFn<{
  theme: DefaultTheme;
  errors: boolean;
  disabled: boolean;
}> = ({ disabled }) => ({
  backgroundColor: !disabled ? 'greylight01' : 'greylight02',
  width: 16,
  height: 16,
  position: 'relative',
  borderRadius: 'xs',
  cursor: disabled ? 'not-allowed' : 'pointer',
  '&:focus': {
    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
  },
  '&:focus-visible': {
    outline: 'none',
    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
  },
});

const checkboxButton: ComponentThemeConfig = {
  baseStyle: checkboxContainerBaseStyle,
};

const checkboxUnselectedBoxBaseStyle: ComponentThemeScaleFn<{
  theme: DefaultTheme;
  errors: boolean;
  disabled: boolean;
}> = ({ disabled, errors, theme }) => ({
  backgroundColor: 'greylight01',
  width: 16,
  height: 16,
  borderRadius: 'xs',
  border: '1px solid',
  position: 'absolute',
  top: 0,
  left: 0,
  borderColor: 'greylight05',
  ...(errors && { borderColor: 'red07' }),
  ...(disabled && { borderColor: transparentize(0.5, theme.colors.greylight05), backgroundColor: 'greylight02' }),
});

const checkboxUnselectedBox: ComponentThemeConfig = {
  baseStyle: checkboxUnselectedBoxBaseStyle,
};

const checkboxIndicatorBaseStyle: ComponentThemeScaleFn<{
  theme: DefaultTheme;
  errors: boolean;
  disabled: boolean;
}> = ({ disabled, errors }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'blue07',
  width: 16,
  height: 16,
  borderRadius: 'xs',
  color: 'greylight01',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...(errors && { backgroundColor: 'red07' }),
  ...(disabled && { backgroundColor: 'greylight05' }),
});

const checkboxIndicator: ComponentThemeConfig = {
  baseStyle: checkboxIndicatorBaseStyle,
};

const checkbox = {
  checkboxButton,
  checkboxUnselectedBox,
  checkboxIndicator,
};
export default checkbox;
