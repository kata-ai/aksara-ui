import { PropAttributesMap } from '@kata-kit/doc-utils';

export const dashboardProps: PropAttributesMap = {
  title: {
    type: 'string',
    description: 'Dashboard title element.'
  },
  tooltip: {
    type: 'string',
    description: 'Dashboard tooltip element.'
  },
  subTitle: {
    type: 'string',
    description: 'Dashboard subtitle element.'
  },
  paragraph: {
    type: 'string',
    description: 'Dashboard description.'
  },
  className: {
    type: 'string',
    description: 'Additional dashboard CSS class.'
  },
  isStarter: {
    type: 'boolean',
    description: 'Whether dashboard is starter or not.'
  },
  headerContent: {
    type: 'any',
    description: 'Dashboard header content element.'
  },
  image: {
    type: 'any',
    description: 'Dashboard image element.'
  },
  isHeadingCentered: {
    type: 'boolean',
    description: 'Whether dashboard header centered or not.'
  }
};

export const dashboardContentHeaderProps: PropAttributesMap = {
  className: {
    type: 'string',
    description: 'Additional dashboard content header CSS class.'
  },
  isSecondary: {
    type: 'boolean',
    description: 'Whether dashboard content header is secondary or not.'
  }
};
