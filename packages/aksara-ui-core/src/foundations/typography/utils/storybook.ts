import { theme } from '../../../theme';

export const textScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(theme.componentStyles.text.scale).map(k => parseInt(k, 10)),
  },
};

export const paragraphScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(theme.componentStyles.paragraph.scale).map(k => parseInt(k, 10)),
  },
};

export const headingScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(theme.componentStyles.heading.scale).map(k => parseInt(k, 10)),
  },
};
