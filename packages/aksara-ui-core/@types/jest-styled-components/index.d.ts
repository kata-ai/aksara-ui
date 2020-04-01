/* eslint-disable @typescript-eslint/ban-types */

// Temporary type shim for jest-styled-components
// https://github.com/styled-components/jest-styled-components/issues/291

declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: Symbol;
    sample?: string | RegExp | object | Array<any> | Function;
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined;

  interface Options {
    media?: string;
    modifier?: string;
    supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R;
  }
}
