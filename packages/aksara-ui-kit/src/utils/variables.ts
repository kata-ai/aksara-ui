/** Color values mapped by Aksara color ID. */
export const colors = {
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
  indigo05: '#2e89ea',
  /** Indigo06 - Indigo */
  indigo06: '#006fe6',
  /** Indigo07 - Dark Imperial Blue */
  indigo07: '#005bbd',
  /** Indigo08 - Royal Blue */
  indigo08: '#004793',
  /** Indigo09 - Maastricht Blue */
  indigo09: '#003369',
  /** Indigo10 - Black Indigo */
  indigo10: '#001f3f',

  // Turquoise
  // Green
  // Yellow
  // Red
  // Grey
  grey01: '#fafafa',
  grey02: '#edeeee',
  grey03: '#cacece',
  grey04: '#858e8d',
  grey05: '#626e6d',
  grey06: '#404e4d',
  grey07: '#293232',
  grey08: '#1e2423',
  grey09: '#121615',
  grey10: '#060807',

  // Helper colors
  white: '#fff',
  black: '#000'
};

export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fonts = {
  system: systemFonts,
  sansSerif: `Barlow, ${systemFonts}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;"
};

/** Heading size values mapped by size number. */
export const headingSizes = {
  900: {
    fontSize: 42,
    lineHeight: 48,
    letterSpacing: -0.2
  },
  800: {
    fontSize: 35,
    lineHeight: 40,
    letterSpacing: -0.2
  },
  700: {
    fontSize: 29,
    lineHeight: 32,
    letterSpacing: -0.2
  },
  600: {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: -0.05
  },
  500: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.05
  },
  400: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.05
  },
  300: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.05
  },
  200: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0
  },
  100: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5
  }
};

/** Text size values mapped by size number. */
export const textSizes = {
  500: {
    fontSize: 20,
    lineHeight: 24
  },
  400: {
    fontSize: 16,
    lineHeight: 20
  },
  300: {
    fontSize: 14,
    lineHeight: 20
  },
  200: {
    fontSize: 12,
    lineHeight: 16
  }
};

/** Text size values mapped by size number. */
export const paragraphSizes = {
  400: {
    fontSize: 16,
    lineHeight: 24
  },
  300: {
    fontSize: 14,
    lineHeight: 24
  }
};

/** Space values (in px) mapped by size designators */
export const space = {
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

/** Breakpoint values (in px) mapped by size designators */
export const breakpoints = {
  /** 0px to 319px */
  xs: 0,
  /** 320px to 767px */
  sm: 320,
  /** 768px to 1023px */
  md: 768,
  /** 1024px to 1439px */
  lg: 1024,
  /** 1440px and above */
  xl: 1440
};
