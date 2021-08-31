const breakpoints = ['1024px', '1280px', '1440px', '1600px'];

const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

const responsive = {
  breakpoints,
  mediaQueries,
};

export type Breakpoints = typeof breakpoints;
export type MediaQueries = typeof mediaQueries;

export default responsive;
