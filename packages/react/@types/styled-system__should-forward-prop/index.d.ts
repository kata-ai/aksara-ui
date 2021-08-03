// Type definitions for @styled-system/should-forward-prop
// Project: https://github.com/testing-library/react-testing-library
// Definitions by: Resi Respati <https://github.com/resir014>
// TypeScript Version: 3.8

/* eslint-disable no-shadow */
declare module '@styled-system/should-forward-prop' {
  // Fix: didn't support number type prop arg
  type genericShouldForwardProp = (prop: string | number | symbol) => boolean;

  export const props: string[];
  export function createShouldForwardProp(props: string[]): genericShouldForwardProp;

  const shouldForwardProp: genericShouldForwardProp;
  export default shouldForwardProp;
}
