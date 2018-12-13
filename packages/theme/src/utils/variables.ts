/** Color pallette. Contains old Kata Platform colors and new KDS 1.0 colors. */
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

  // KDS 1.0 brand colors.
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

/** Type scales in px units */
export const fontSizes = {
  deka: 12,
  hecto: 14,
  kilo: 16,
  mega: 18,
  giga: 20,
  tera: 24,
  peta: 28
};

/** Line heights in em units */
export const lineHeights = {
  deka: 1.25,
  hecto: 1.5,
  kilo: 1.5,
  mega: 1.25,
  giga: 1.25,
  tera: 1.125,
  peta: 1.125
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

/**
 * (pre-KDS) Breakpoints in px units
 * @deprecated to be deprecated when we fully move to kds 1.0
 */
export const breaks = {
  breakSmall: '1024px',
  breakMedium: '1280px',
  breakLarge: '1366px'
};

/** Elevation shadow elements, separated by UI layers. */
export const elevationShadow = {
  elevationZ100: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
  elevationZ200: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
  elevationZ300: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
  elevationZ400: '0 8px 16px 0 rgba(0, 0, 0, 0.25)',
  elevationZ500: '0 12px 24px 0 rgba(0, 0, 0, 0.25)'
};

/**
 * (pre-KDS) Box shadow elements, separated by UI layers.
 * @deprecated to be deprecated when we fully move to kds 1.0
 */
export const layerShadows = {
  layer100Shadow: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
  layer200Shadow: '0 2px 4px 1px rgba(0, 0, 0, 0.15)',
  layer300Shadow: '0 4px 6px 2px rgba(0, 0, 0, 0.15)',
  layer400Shadow: '0 6px 10px 2px rgba(0, 0, 0, 0.15)'
};

/** Space margins in px units */
export const spacing = {
  spacing2Xs: 2,
  spacingXs: 4,
  spacingSm: 8,
  spacingSmMd: 12,
  spacingMd: 16,
  spacingLg: 24,
  spacingXl: 40,
  spacing2Xl: 64,
  spacing3Xl: 80
};

/**
 * (pre-KDS) Spacer widths in rem units, counted from the base font size 13px.
 * @deprecated to be deprecated when we fully move to kds 1.0
 */
export const spaces = {
  /** Equivalent to 8px */
  space1: '0.615384615rem',
  /** Equivalent to 16px */
  space2: '1.230769231rem',
  /** Equivalent to 24px */
  space3: '1.846153846rem',
  /** Equivalent to 32px */
  space4: '2.461538462rem',
  /** Equivalent to 40px */
  space5: '3.076923077rem',
  /** Equivalent to 48px */
  space6: '3.692307692rem',
  /** Equivalent to 56px */
  space7: '4.307692308rem',
  /** Equivalent to 64px */
  space8: '4.923076923rem',
  /** Equivalent to 72px */
  space9: '5.538461538rem',
  /** Equivalent to 80px */
  space10: '6.153846154rem'
};

/** Border radius sizes */
export const borderRadiuses = {
  borderRadiusXs: '2px',
  borderRadiusSmall: '4px',
  borderRadiusMedium: '6px',
  borderRadiusLarge: '8px',

  // KDS 1.0 properties
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8
};

/** Transition duration + effects */
export const transitions = {
  transitionFast: '0.3s',
  transitionNormal: '0.5s',
  transitionSlow: '0.75s',
  transitionEasing: 'ease'
};

/**
 * pre-KDS font properties
 * @deprecated to be deprecated when we fully move to kds 1.0
 */
export const fontProps = {
  rootFontSize: '13px',
  rootLineHeight: '20px',
  h1FontSize: '1.85rem',
  h1FontWeight: '500',
  h1LineHeight: '2.461rem',
  h2FontSize: '1.5rem',
  h2FontWeight: '500',
  h2LineHeight: '2.153rem',
  titleFontSize: '1.25rem',
  titleFontWeight: '500',
  titleLineHeight: '1.846rem',
  subtitleFontSize: '1.075rem',
  subtitleFontWeight: '700',
  subtitleLineHeight: '1.538rem',
  labelFontSize: '0.925rem',
  labelFontWeight: '700',
  labelLineHeight: '1.384rem',
  labelLetterSpacing: '0.2px',
  smallFontSize: '0.85rem',
  smallFontWeight: '700',
  smallLineHeight: '1.23rem',
  bodyFontSize: '1rem',
  bodyFontWeight: 'normal',
  bodyLineHeight: '2',
  tooltipFontSize: '1rem',
  tooltipFontWeight: 'normal',
  tooltipLetterSpacing: '0.2px'
};

export const variables = {
  // deprecated properties
  breaks,
  colors,
  spaces,
  borderRadiuses,
  layerShadows,
  transitions,
  fontProps,

  // new KDS 1.0 properties
  spacing,
  breakpoints,
  fontSizes,
  lineHeights,
  elevationShadow
};

export default variables;
