/* eslint-disable no-underscore-dangle */
import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig, ComponentThemeScaleFn, pseudoSelectors } from '../../system';

const baseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  borderRadius: '12px',
  border: '1px solid transparent',
  background: theme.colors.grey01,
  [pseudoSelectors._checked]: {
    background: theme.colors.blue01,
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

const borderedStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }: { theme: DefaultTheme }) => ({
  border: `1px solid ${theme.colors.greylight04}`,
  borderRadius: 'lg',
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
const optionItemStyle: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {},
      bordered: borderedStyle,
    },
  },
};

const optionItem = {
  optionItem: optionItemStyle,
};
export default optionItem;
