/** Color pallette. Contains old Kata Platform colors and experimental colors. */
export const colors = {
  // (DEPRECATED) old color variables
  white: '#ffffff',
  red: '#e53935',
  green: '#00c853',
  yellow: '#ffc400',
  softKataBlue: '#d8ebff',
  lightKataBlue: '#7fbcff',
  kataBlue: '#006fe6',
  darkKataBlue: '#0056b3',
  lightCobalt: '#6386c7',
  semiCobalt: '#2662cf',
  cobalt: '#2053af',
  darkCobalt: '#19428c',
  gray10: '#f6f7f8',
  gray20: '#edf1f2',
  gray30: '#e2e6e8',
  gray40: '#c2c7c8',
  gray50: '#949a9d',
  gray60: '#676b6d',
  gray70: '#484c4f',
  gray80: '#24282d',
  special01: '#f8bbd0',
  special02: '#e8bbf8',
  special03: '#bbcaf8',
  special04: '#bbe7f8',
  special05: '#bbf8ee',
  special06: '#bbf8c4',
  special07: '#d6f8bb',
  special08: '#f5f8bb',
  special09: '#f8e5bb',
  special10: '#f8cebb',

  // Experimental brand colors.
  neutral01: '#fff',
  neutral02: '#f6f7f8',
  neutral03: '#edf1f2',
  neutral04: '#e2e6e8',
  neutral05: '#c2c7c8',
  neutral06: '#949a9d',
  neutral07: '#676b6d',
  neutral08: '#484c4f',
  neutral09: '#2b2f33',
  cobalt01: '#5597e0',
  cobalt02: '#2053af',
  cobalt03: '#102a59',
  kata01: '#4da3ff',
  kata02: '#006fe6',
  kata03: '#003e80',
  green01: '#00ea61',
  green02: '#59a444',
  green03: '#658f3d',
  red01: '#fc6627',
  red02: '#dc211c',
  red03: '#af1a16',
  yellow01: '#feef99',
  yellow02: '#fde034',
  yellow03: '#ebc902'
};

export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fonts = {
  system: systemFonts,
  sansSerif: `'Museo Sans Rounded', ${systemFonts}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;"
};

/**
 * Legacy spacer units (in px units).
 */
export const spaceLegacy = {
  /** Equivalent to 8px */
  space1: 8,
  /** Equivalent to 16px */
  space2: 16,
  /** Equivalent to 24px */
  space3: 24,
  /** Equivalent to 32px */
  space4: 32,
  /** Equivalent to 40px */
  space5: 40,
  /** Equivalent to 48px */
  space6: 48,
  /** Equivalent to 56px */
  space7: 56,
  /** Equivalent to 64px */
  space8: 64,
  /** Equivalent to 72px */
  space9: 72,
  /** Equivalent to 80px */
  space10: 80
};

/** Space values (in px) mapped by size designators */

export const space = {
  ...spaceLegacy,
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48
};

/** Breakpoints in px units */
export const breakpoints = {
  /** 1024px (enable to 1279px) */
  sm: 1024,
  /** 1280px (enable to 1439px) */
  md: 1280,
  /** 1440px (enable to 1599px) */
  lg: 1440,
  /** 1600px (and more) */
  xl: 1600
};

/** Border radiuses */
export const radii = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8
};

/** Legacy box-shadow values. */
export const shadowsLegacy = {
  layer100: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
  layer200: '0 2px 4px 1px rgba(0, 0, 0, 0.15)',
  layer300: '0 4px 6px 2px rgba(0, 0, 0, 0.15)',
  layer400: '0 6px 10px 2px rgba(0, 0, 0, 0.15)'
};

/** Default box/text shadow separated by layers */
export const shadows = {
  ...shadowsLegacy
};

/** Custom elevation variant for the Card component. */
export const elevation = {
  layer100: {
    boxShadow: 'layer100'
  },
  layer200: {
    boxShadow: 'layer200'
  },
  layer300: {
    boxShadow: 'layer300'
  },
  layer400: {
    boxShadow: 'layer400'
  }
};

/** Typography scale values (in pixels) mapped by style tokens. */
export const typeScale = {
  heading1: {
    fontSize: 28,
    lineHeight: 32
  },
  heading2: {
    fontSize: 24,
    lineHeight: 30
  },
  heading3: {
    fontSize: 20,
    lineHeight: 24
  },
  heading4: {
    fontSize: 18,
    lineHeight: 22
  },
  heading5: {
    fontSize: 16,
    lineHeight: 24
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20
  },
  large: {
    fontSize: 16,
    lineHeight: 24
  },
  body: {
    fontSize: 13,
    lineHeight: 20
  },
  label: {
    fontSize: 12,
    lineHeight: 16
  },
  small: {
    fontSize: 11,
    lineHeight: 16
  }
};
