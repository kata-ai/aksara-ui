const white = '#ffffff';
const red = '#e53935';
const green = '#00c853';
const yellow = '#ffc400';
const softKataBlue = '#d8ebff';
const lightKataBlue = '#7fbcff';
const kataBlue = '#006fe6';
const darkKataBlue = '#0056b3';
const lightCobalt = '#6386c7';
const semiCobalt = '#2662cf';
const cobalt = '#2053af';
const darkCobalt = '#19428c';
const gray10 = '#f6f7f8';
const gray20 = '#edf1f2';
const gray30 = '#e2e6e8';
const gray40 = '#c2c7c8';
const gray50 = '#949a9d';
const gray60 = '#676b6d';
const gray70 = '#484c4f';
const gray80 = '#24282d';
const special01 = '#f8bbd0';
const special02 = '#e8bbf8';
const special03 = '#bbcaf8';
const special04 = '#bbe7f8';
const special05 = '#bbf8ee';
const special06 = '#bbf8c4';
const special07 = '#d6f8bb';
const special08 = '#f5f8bb';
const special09 = '#f8e5bb';
const special10 = '#f8cebb';

// Spacer widths in rem units, counted from the base font size 13px.
const space1 = '0.615384615rem'; // 8px
const space2 = '1.230769231rem'; // 16px
const space3 = '1.846153846rem'; // 24px
const space4 = '2.461538462rem'; // 32px
const space5 = '3.076923077rem'; // 40px
const space6 = '3.692307692rem'; // 48px
const space7 = '4.307692308rem'; // 56px
const space8 = '4.923076923rem'; // 64px
const space9 = '5.538461538rem'; // 72px
const space10 = '6.153846154rem'; // 80px

const borderRadiusXs = '2px';
const borderRadiusSmall = '4px';
const borderRadiusMedium = '6px';
const borderRadiusLarge = '8px';

const rootFontSize = '13px';
const rootLineHeight = '20px';
const h1FontSize = '1.85rem';
const h1FontWeight = '500';
const h1LineHeight = '2.461rem';
const h2FontSize = '1.5rem';
const h2FontWeight = '500';
const h2LineHeight = '2.153rem';
const titleFontSize = '1.25rem';
const titleFontWeight = '500';
const titleLineHeight = '1.846rem';
const subtitleFontSize = '1.075rem';
const subtitleFontWeight = '700';
const subtitleLineHeight = '1.538rem';
const labelFontSize = '0.925rem';
const labelFontWeight = '700';
const labelLineHeight = '1.384rem';
const labelLetterSpacing = '0.2px';
const smallFontSize = '0.85rem';
const smallFontWeight = '700';
const smallLineHeight = '1.23rem';
const bodyFontSize = '1rem';
const bodyFontWeight = 'normal';
const bodyLineHeight = '2';
const tooltipFontSize = '1rem';
const tooltipFontWeight = 'normal';
const tooltipLetterSpacing = '0.2px';

const layer100Shadow = '0 1px 1px 0 rgba(0, 0, 0, 0.25)';
const layer200Shadow = '0 2px 4px 1px rgba(0, 0, 0, 0.15)';
const layer300Shadow = '0 4px 6px 2px rgba(0, 0, 0, 0.15)';
const layer400Shadow = '0 6px 10px 2px rgba(0, 0, 0, 0.15)';

const transitionFast = '0.3s';
const transitionNormal = '0.5s';
const transitionSlow = '0.75s';
const transitionEasing = 'ease';

const breakSmall = '1024px';
const breakMedium = '1280px';
const breakLarge = '1366px';

export const colors = {
  white,
  red,
  green,
  yellow,
  softKataBlue,
  lightKataBlue,
  kataBlue,
  darkKataBlue,
  lightCobalt,
  semiCobalt,
  cobalt,
  darkCobalt,
  gray10,
  gray20,
  gray30,
  gray40,
  gray50,
  gray60,
  gray70,
  gray80,
  special01,
  special02,
  special03,
  special04,
  special05,
  special06,
  special07,
  special08,
  special09,
  special10
};

export const spaces = {
  space1,
  space2,
  space3,
  space4,
  space5,
  space6,
  space7,
  space8,
  space9,
  space10
};

export const fontProps = {
  rootFontSize,
  rootLineHeight,
  h1FontSize,
  h1FontWeight,
  h1LineHeight,
  h2FontSize,
  h2FontWeight,
  h2LineHeight,
  titleFontSize,
  titleFontWeight,
  titleLineHeight,
  subtitleFontSize,
  subtitleFontWeight,
  subtitleLineHeight,
  labelFontSize,
  labelFontWeight,
  labelLineHeight,
  labelLetterSpacing,
  smallFontSize,
  smallFontWeight,
  smallLineHeight,
  bodyFontSize,
  bodyFontWeight,
  bodyLineHeight,
  tooltipFontSize,
  tooltipFontWeight,
  tooltipLetterSpacing
};

export const layerShadows = {
  layer100Shadow,
  layer200Shadow,
  layer300Shadow,
  layer400Shadow
};

export const borderRadiuses = {
  borderRadiusXs,
  borderRadiusSmall,
  borderRadiusMedium,
  borderRadiusLarge
};

export const transitions = {
  transitionFast,
  transitionNormal,
  transitionSlow,
  transitionEasing
};

export const breaks = {
  breakSmall,
  breakMedium,
  breakLarge
};

export const variables = {
  breaks,
  colors,
  spaces,
  borderRadiuses,
  layerShadows,
  transitions,
  fontProps
};

export default variables;
