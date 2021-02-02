import { theme } from '../../../theme';

export const textScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(theme.componentStyles.text).map(k => parseInt(k, 10)),
  },
};

export const paragraphScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(theme.componentStyles.paragraph).map(k => parseInt(k, 10)),
  },
};

export const headingScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(theme.componentStyles.heading).map(k => parseInt(k, 10)),
  },
};
