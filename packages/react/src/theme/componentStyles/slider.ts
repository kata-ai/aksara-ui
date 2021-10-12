import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig } from '../types';

const sliderTrack: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    height: 8,
    background: theme.colors.blue01,
    borderRadius: 8,
  }),
};

const sliderHandle: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    width: 16,
    height: 16,
    borderRadius: 9999,
    backgroundColor: theme.colors.blue07,
    outline: '2px solid',
    outlineColor: theme.colors.greylight01,
    cursor: 'unset',
    '&:hover, &:focus, &:active': {
      outline: '4px solid',
      outlineColor: transparentize(0.3, theme.colors.blue03),
    },
    '&:hover, &:focus': {
      backgroundColor: theme.colors.blue08,
    },
    '&:active': {
      backgroundColor: theme.colors.blue09,
    },
  }),
};

const slider = {
  inputSliderTrack: sliderTrack,
  inputSliderHandle: sliderHandle,
};

export default slider;
