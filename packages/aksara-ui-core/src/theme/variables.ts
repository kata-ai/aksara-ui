export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fonts = {
  system: systemFonts,
  brand: `'Inter', ${systemFonts}`,
  brandLegacy: `'Barlow', ${systemFonts}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;",
};

export const breakpoints = ['1024px', '1280px', '1440px', '1600px'];

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};
