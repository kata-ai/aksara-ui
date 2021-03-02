export const tabListSizeVariants = {
  48: {
    px: 8,
    py: 12,
  },
  40: {
    px: 8,
    py: 10,
  },
};

export const tabButtonSizeVariants = {
  48: {
    fontSize: 300,
  },
  40: {
    fontSize: 200,
  },
};

export const tabPanelsSizeVariants = {
  48: {
    px: 18,
    py: 'sm',
    fontSize: 300,
  },
  40: {
    px: 18,
    py: 'xs',
    fontSize: 300,
  },
};

export type TabsSizeVariants = keyof typeof tabListSizeVariants;
