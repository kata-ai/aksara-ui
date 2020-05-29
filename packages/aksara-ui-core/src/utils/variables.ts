import { transparentize } from 'polished';

/** (DEPRECATED) old color variables */
const legacyColors = {
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
};

const systemColors = {
  // Blue
  /** Blue01 - Glitter */
  blue01: '#e7f1fc',
  /** Blue02 - Pale Aqua */
  blue02: '#b9d7f8',
  /** Blue03 - Jordy Blue */
  blue03: '#8bbdf3',
  /** Blue04 - Blue Jeans */
  blue04: '#5ca3ef',
  /** Blue05 - Bleu de France */
  blue05: '#2e89ea',
  /** Blue06 - Brandeis Blue */
  blue06: '#006fe6',
  /** Blue07 - Absolute Zero */
  blue07: '#005bbd',
  /** Blue08 - Usafa Blue */
  blue08: '#004793',
  /** Blue09 - Dark Midnight Blue */
  blue09: '#003369',
  /** blue10 - Maastricht Blue */
  blue10: '#001f3f',

  // Indigo
  /** Indigo01 - Soap */
  indigo01: '#e7eaf4',
  /** Indigo02 - Light Steel Blue */
  indigo02: '#b9c0df',
  /** Indigo03 - Ceil */
  indigo03: '#8b97c9',
  /** Indigo04 - Glaucous */
  indigo04: '#5c6db4',
  /** Indigo05 - Pigment Blue */
  indigo05: '#2e449f',
  /** Indigo06 - Indigo */
  indigo06: '#001b8a',
  /** Indigo07 - Dark Imperial Blue */
  indigo07: '#001771',
  /** Indigo08 - Royal Blue */
  indigo08: '#001258',
  /** Indigo09 - Maastricht Indigo */
  indigo09: '#000d3f',
  /** Indigo10 - Black Indigo */
  indigo10: '#000826',

  // Turquoise
  /** Turquoise01 - Bubbles */
  turquoise01: '#e7fafd',
  /** Turquoise02 - Diamond */
  turquoise02: '#b9f1f9',
  /** Turquoise03 - Pale Cyan */
  turquoise03: '#8be7f5',
  /** Turquoise04 - Sky Blue */
  turquoise04: '#5cdef1',
  /** Turquoise05 - Turquoise Surf */
  turquoise05: '#2ed5ed',
  /** Turquoise06 - Turquoise */
  turquoise06: '#00cce9',
  /** Turquoise07 - Bondi Blue */
  turquoise07: '#00a7bf',
  /** Turquoise08 - Teal */
  turquoise08: '#008295',
  /** Turquoise09 - Bubbles */
  turquoise09: '#005d6a',
  /** Turquoise10 - Bubbles */
  turquoise10: '#003840',

  // Green
  /** Green01 - Honeydew */
  green01: '#f2f8f0',
  /** Green02 - Timbrewolf */
  green02: '#daecd3',
  /** Green03 - Celadon */
  green03: '#c1e0b7',
  /** Green04 - Granny Smith Apple */
  green04: '#a9d49a',
  /** Green05 - Pistachio */
  green05: '#90c87d',
  /** Green06 - Green Bud */
  green06: '#78bc61',
  /** Green07 - Palm Leaf */
  green07: '#639a50',
  /** Green08 - Fern Green */
  green08: '#4d783e',
  /** Green09 - Mughal Green */
  green09: '#37562d',
  /** Green10 - Leather Jacket */
  green10: '#21341b',

  // Yellow
  /** Yellow01 - Seashell */
  yellow01: '#fff7ed',
  /** Yellow02 - Lumber */
  yellow02: '#ffe7ca',
  /** Yellow03 - Tuscan */
  yellow03: '#ffd7a8',
  /** Yellow04 - Topaz */
  yellow04: '#ffc885',
  /** Yellow05 - Rajah */
  yellow05: '#ffb862',
  /** Yellow06 - Yellow Orange */
  yellow06: '#ffa940',
  /** Yellow07 - Bronze */
  yellow07: '#d18b35',
  /** Yellow08 - Liver */
  yellow08: '#a36c29',
  /** Yellow09 - Drab */
  yellow09: '#744d1e',
  /** Yellow10 - Pullman */
  yellow10: '#462f12',

  // Red
  /** Red01 - Linen */
  red01: '#fce9e8',
  /** Red02 - Spanish Pink */
  red02: '#f7bfbc',
  /** Red03 - Salmon Pink */
  red03: '#f2958f',
  /** Red04 - Pastel */
  red04: '#ed6b63',
  /** Red05 - Vermilion */
  red05: '#e84136',
  /** Red06 - Crimson */
  red06: '#e3170a',
  /** Red07 - Orange */
  red07: '#ba1309',
  /** Red08 - Sangria */
  red08: '#910f07',
  /** Red09 - Rosewood */
  red09: '#680b05',
  /** Red10 - Bean */
  red10: '#3e0703',

  // Grey
  /** Grey 01 - White */
  grey01: '#ffffff',
  /** Grey 02 - Ghost */
  grey02: '#f7f8f9',
  /** Grey 03 - Isabelline */
  grey03: '#ebedef',
  /** Grey 04 - Gainsboro */
  grey04: '#d7dbdf',
  /** Grey 05 - Ash Grey */
  grey05: '#b0b7bf',
  /** Grey 06 - Grey Blue */
  grey06: '#89949f',
  /** Grey 07 - Aurometalsaurus */
  grey07: '#62707f',
  /** Grey 08 - Outer Space */
  grey08: '#313f4e',
  /** Grey 09 - Japanese Indigo */
  grey09: '#253648',
  /** Grey 10 - Yankees Blue */
  grey10: '#1e2b3a',
};

/** Color pallette. Contains old Kata Platform colors, experimental colors, and style tokens. */
export const colors = {
  white: '#fff',
  black: '#000',

  ...legacyColors,
  ...systemColors,

  // Core tokens
  bg: systemColors.grey01,
  'bg-secondary': systemColors.grey02,
  success: systemColors.green06,
  warning: systemColors.yellow05,
  danger: systemColors.red05,
  info: systemColors.indigo03,
  ui: systemColors.blue06,
  'ui-hover': systemColors.blue07,
  'ui-hover-2': systemColors.indigo01,
  'ui-visited': systemColors.turquoise08,

  // Type tokens
  link: systemColors.blue06,
  'link-hover': systemColors.blue07,
  'link-visited': systemColors.turquoise08,
  'link-destructive': systemColors.red05,
  text01: systemColors.grey08,
  text02: systemColors.grey09,
  text03: systemColors.grey07,
  text04: systemColors.grey04,
  text05: systemColors.grey06,
  text06: systemColors.yellow06,
  'text-success': systemColors.green07,
  'text-warning': systemColors.yellow07,
  'text-danger': systemColors.red07,
  'text-inverse': systemColors.grey01,

  // Icon tokens
  icon01: systemColors.grey08,
  icon02: systemColors.grey06,
  icon03: systemColors.blue06,
  icon04: systemColors.grey04,
  icon05: systemColors.green06,
  icon06: systemColors.yellow05,
  icon07: systemColors.red05,
  icon08: systemColors.indigo03,
};

export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fonts = {
  system: systemFonts,
  brand: `'Inter', ${systemFonts}`,
  brandLegacy: `'Barlow', ${systemFonts}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;",
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
  space10: 80,
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
  xxl: 48,
};

export const breakpoints = ['1024px', '1280px', '1440px', '1600px'];

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

/** Border radiuses */
export const radii = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
};

/** Legacy box-shadow values. */
export const shadowsLegacy = {
  layer100: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
  layer200: '0 2px 4px 1px rgba(0, 0, 0, 0.15)',
  layer300: '0 4px 6px 2px rgba(0, 0, 0, 0.15)',
  layer400: '0 6px 10px 2px rgba(0, 0, 0, 0.15)',
};

/** Default box/text shadow separated by layers */
export const shadows = {
  ...shadowsLegacy,
};

/** Legacy elevation values. */
export const elevationLegacy = {
  layer100: {
    boxShadow: 'layer100',
  },
  layer200: {
    boxShadow: 'layer200',
  },
  layer300: {
    boxShadow: 'layer300',
  },
  layer400: {
    boxShadow: 'layer400',
  },
};

const shadowColor = transparentize(0.85, colors.grey09);

/** Custom elevation variant for the Card component. */
export const elevation = {
  ...elevationLegacy,
  level1: {
    boxShadow: 'none',
  },
  level2: {
    boxShadow: `0px 2px 6px ${shadowColor};`,
  },
  level3: {
    boxShadow: `0px 6px 12px ${shadowColor};`,
  },
  level4: {
    boxShadow: `0px 12px 24px ${shadowColor};`,
  },
  level5: {
    boxShadow: `0px 24px 48px ${shadowColor};`,
  },
};

/** Typography scale values (in pixels) mapped by style tokens. */
export const typeScale = {
  heading1: {
    fontSize: 28,
    lineHeight: 32,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 30,
  },
  heading3: {
    fontSize: 20,
    lineHeight: 24,
  },
  heading4: {
    fontSize: 18,
    lineHeight: 22,
  },
  heading5: {
    fontSize: 16,
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
  },
  large: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 13,
    lineHeight: 20,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
  },
  small: {
    fontSize: 11,
    lineHeight: 16,
  },
};
