import styled from 'styled-components';

/** A button element with all styling elements removed (incl. hover/focus effects). */
const UnstyledButton = styled('button')`
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  /* Normalizes line height & removes center align */
  line-height: normal;
  text-align: inherit;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable \`input\` types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

UnstyledButton.displayName = 'UnstyledButton';

export default UnstyledButton;
