import { DefaultTheme } from 'styled-components';
import { ComponentThemeConfig, ComponentThemeScaleFn } from '../types';

const baseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  '--tooltip-foreground': theme.colors.greylight01,
  '--tooltip-border': theme.colors.greydark02,
  '--tooltip-background': theme.colors.greydark02,
  maxWidth: 200,
  textAlign: 'left',
  verticalAlign: 'middle',
  borderRadius: '4px',
  color: 'var(--tooltip-foreground)',
  backgroundColor: 'var(--tooltip-background)',
  zIndex: 9999,
  "&[data-popper-placement*='bottom']": {
    '& .tooltip-arrow': {
      left: 0,
      marginTop: '-0.4rem',
      top: 0,
      '&::before': {
        borderColor: 'transparent transparent var(--tooltip-border) transparent',
        borderWidth: '0 0.5rem 0.4rem 0.5rem',
        position: 'absolute',
        top: 0,
      },
      '&::after': {
        borderColor: 'transparent transparent var(--tooltip-background) transparent',
        borderWidth: '0 0.5rem 0.4rem 0.5rem',
      },
    },
  },
  "&[data-popper-placement*='top']": {
    '& .tooltip-arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-1rem',
      '&::before': {
        borderColor: 'var(--tooltip-border) transparent transparent transparent',
        borderWidth: '0.4rem 0.5rem 0 0.5rem',
        position: 'absolute',
        top: 0,
      },
      '&::after': {
        borderColor: 'var(--tooltip-background) transparent transparent transparent',
        borderWidth: '0.4rem 0.5rem 0 0.5rem',
      },
    },
  },
  "&[data-popper-placement*='right']": {
    '& .tooltip-arrow': {
      left: 0,
      marginLeft: '-0.7rem',
      '&::before': {
        borderColor: 'transparent var(--tooltip-border) transparent transparent',
        borderWidth: '0.5rem 0.4rem 0.5rem 0',
      },
      '&::after': {
        borderColor: 'transparent var(--tooltip-background) transparent transparent',
        borderWidth: '0.5rem 0.4rem 0.5rem 0',
        left: '6px',
        top: 0,
      },
    },
  },
  "&[data-popper-placement*='left']": {
    '& .tooltip-arrow': {
      marginRight: '-0.7rem',
      right: 0,
      '&::before': {
        borderColor: 'transparent transparent transparent var(--tooltip-border)',
        borderWidth: '0.5rem 0 0.5rem 0.4em',
      },
      '&::after': {
        borderColor: 'transparent transparent transparent var(--tooltip-background)',
        borderWidth: '0.5rem 0 0.5rem 0.4em',
        left: '3px',
        top: 0,
      },
    },
  },
});

const tooltipRoot: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [['size', 'sizes']],
  scales: {
    sizes: {
      sm: {
        py: 'xxs',
        px: 'md',
      },
      md: {
        p: 'md',
      },
      lg: {
        p: 'md',
      },
    },
  },
};

const tooltip = {
  tooltipRoot,
};

export default tooltip;
