import { componentStyles } from '../../../utils';

export const textScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(componentStyles.text).map(k => parseInt(k, 10)),
  },
};

export const paragraphScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(componentStyles.paragraph).map(k => parseInt(k, 10)),
  },
};

export const headingScaleOptions = {
  control: {
    type: 'select',
    options: Object.keys(componentStyles.heading).map(k => parseInt(k, 10)),
  },
};
