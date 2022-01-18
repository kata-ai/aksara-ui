/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

// Mock document.createRange for `popper.js`
// https://github.com/airbnb/enzyme/issues/1626#issuecomment-398588616
if (global.document) {
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

if (typeof global.TextEncoder === 'undefined') {
  import('util').then(({ TextEncoder }) => {
    global.TextEncoder = TextEncoder;
  });
}
// fix jsdom TextEncoder not defined

// https://github.com/radix-ui/primitives/issues/420#issuecomment-771615182
global.ResizeObserver = class ResizeObserver {
  cb: any;

  constructor(cb: any) {
    this.cb = cb;
  }

  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }

  unobserve() {}

  disconnect() {}
};

window.DOMRect = {
  // @ts-ignore
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
