import type { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../system';

const stepHeaderContainer: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    display: 'flex',
    columnGap: theme.space.xxs,
  }),
};
const stepHeader: ComponentThemeConfig = {
  baseStyle: () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      alignItems: 'flex-start',
    };
  },
};

const stepHeaderBorder: ComponentThemeConfig = {
  baseStyle: ({
    isCompletedStep,
    isCurrentStep,
    theme,
  }: {
    theme: DefaultTheme;
    isCompletedStep: boolean;
    isCurrentStep: boolean;
  }) => {
    let color = theme.colors.green07;
    if (isCurrentStep) {
      color = theme.colors.blue07;
    } else if (!isCurrentStep && !isCompletedStep) {
      color = theme.colors.greylight05;
    }
    return {
      width: '100%',
      height: theme.sizes.xxs,
      backgroundColor: color,
      mb: theme.space.xxs,
      borderRadius: theme.sizes.xxs,
    };
  },
};

const circleIcon: ComponentThemeConfig = {
  baseStyle: ({
    isCompletedStep,
    isCurrentStep,
    theme,
  }: {
    theme: DefaultTheme;
    isCompletedStep: boolean;
    isCurrentStep: boolean;
  }) => {
    let color = theme.colors.green07;
    if (isCurrentStep) {
      color = theme.colors.blue07;
    } else if (!isCurrentStep && !isCompletedStep) {
      color = theme.colors.greylight05;
    }
    return {
      display: 'inline-block',
      height: theme.sizes.md,
      width: theme.sizes.md,
      borderRadius: '50%',
      borderWidth: theme.sizes.xxxs,
      borderStyle: 'solid',
      borderColor: color,
    };
  },
};

const stepHeaderLabel: ComponentThemeConfig = {
  baseStyle: ({
    isCompletedStep,
    isCurrentStep,
    theme,
  }: {
    theme: DefaultTheme;
    isCompletedStep: boolean;
    isCurrentStep: boolean;
  }) => {
    let color = theme.colors.green08;
    let fontWeight = 500;
    if (isCurrentStep) {
      color = theme.colors.blue08;
      fontWeight = 700;
    } else if (!isCurrentStep && !isCompletedStep) {
      color = theme.colors.greymed04;
    }
    return {
      flex: 1,
      ml: theme.space.xs,
      color,
      fontWeight,
      fontSize: theme.fontSizes[300],
    };
  },
};

const stepper = {
  stepHeaderContainer,
  stepHeader,
  stepHeaderBorder,
  stepHeaderLabel,
  circleIcon,
};

export default stepper;
