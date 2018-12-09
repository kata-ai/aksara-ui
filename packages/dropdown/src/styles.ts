import styled, { css, SimpleInterpolation } from 'styled-components';

import { ButtonWrapper } from '@kata-kit/button';
import { variables } from '@kata-kit/theme';

export const dropdownMenu = css`` as SimpleInterpolation;

const Block = css`
  display: block;
  width: 100%;
`;

export const DropdownToggleButton = styled(ButtonWrapper)`
  ${props => props.block && Block};
  position: relative;
  text-align: left;
  background: ${variables.colors.white};
  border-radius: 6px;
  color: ${variables.colors.gray50};
  border: 1px solid ${variables.colors.gray30};
  padding: 10px 36px 10px 16px;
  height: 40px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 1.538rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover {
    color: ${variables.colors.gray50};
    background-color: ${variables.colors.gray20};
    border-color: ${variables.colors.kataBlue};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &.is-filled {
    color: ${variables.colors.gray80};
  }

  &.is-open {
    color: ${variables.colors.white};
    background-color: ${variables.colors.gray70};
    border-color: transparent;

    &:hover,
    &:focus {
      color: ${variables.colors.white};
      background-color: ${variables.colors.gray70};
      border-color: transparent;
    }
  }

  .loading-icon {
    position: absolute;
    top: 7px;
    right: 10px;
  }
`;
