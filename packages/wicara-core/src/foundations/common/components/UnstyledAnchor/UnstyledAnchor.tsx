import styled from 'styled-components';

/** An anchor element with all styling elements removed (incl. hover/focus effects). */
const UnstyledAnchor = styled('a')`
  font-style: inherit;
  color: inherit;
  background-color: transparent;
  font-size: inherit;
  text-decoration: none;
  font-variant: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: inherit;
  border: inherit;
  outline: inherit;
  box-shadow: inherit;

  &:hover,
  &:focus,
  &:active,
  &:visited {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
    border-radius: inherit;
    border: inherit;
    outline: inherit;
    box-shadow: inherit;
  }
`;

UnstyledAnchor.displayName = 'UnstyledAnchor';

export default UnstyledAnchor;
