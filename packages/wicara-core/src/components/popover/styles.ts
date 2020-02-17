import styled, { css } from 'styled-components';

interface IsVisibleProps {
  isVisible?: boolean;
}

export const Details = styled('div')`
  display: inline-flex;
  position: relative;
`;

export const Summary = styled('div')<IsVisibleProps>`
  display: inline-flex;
  list-style: none;
  outline: none;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${props =>
    props.isVisible &&
    css`
      &::before {
        content: '';
        background: transparent;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: default;
        z-index: 80;
      }
    `}
`;

export const Menu = styled('div')`
  z-index: 90;
`;
