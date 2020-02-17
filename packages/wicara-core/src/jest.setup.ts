/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

// Mock document.createRange for `popper.js`
// https://github.com/airbnb/enzyme/issues/1626#issuecomment-398588616
if ((global as any).document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    // @ts-ignore
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}
