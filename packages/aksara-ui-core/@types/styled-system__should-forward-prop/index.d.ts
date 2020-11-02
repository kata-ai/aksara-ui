// Type definitions for @styled-system/should-forward-prop
// Project: https://github.com/testing-library/react-testing-library
// Definitions by: Resi Respati <https://github.com/resir014>
// TypeScript Version: 3.8

declare module '@styled-system/should-forward-prop' {
  declare const shouldForwardProp: <O extends object = {}>(propName: keyof O) => boolean;
  export default shouldForwardProp;
}
