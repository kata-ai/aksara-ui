import styled, { css, SimpleInterpolation } from 'styled-components';

import { ButtonWrapper } from '@kata-kit/button';
import { variables } from '@kata-kit/theme';
import DropdownStyles from './DropdownStyles';

export const dropdownMenu = css`
  border-radius: ${variables.borderRadiuses.borderRadiusSmall};
  box-shadow: ${variables.layerShadows.layer200Shadow};
` as SimpleInterpolation;

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
`;

export const DropdownToggleIcon = styled('i')`
  display: inline-block;
  position: absolute;
  right: 8px;
  top: 9px;
  margin-left: 8px;
  font-size: 20px;

  &::before {
    vertical-align: middle;
  }
`;

export const DropdownBase = () =>
  css`
    ${DropdownStyles};

    .kata {
      &-dropdown {
        &__header {
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.2px;
          color: ${variables.colors.gray50};
          padding: 0 16px;
        }

        &__item {
          padding: 10px 16px;
          color: ${variables.colors.gray70} !important;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          &--selected {
            color: ${variables.colors.kataBlue};
          }

          &:hover:not(.disabled) {
            background: ${variables.colors.gray10};
          }

          &:focus:not(.disabled),
          &:active:not(.disabled) {
            background: ${variables.colors.gray10};
            color: ${variables.colors.kataBlue} !important;
          }
        }

        &__menu {
          ${dropdownMenu};

          &--open {
            button {
              color: ${variables.colors.white};
              background-color: ${variables.colors.gray70} !important;
            }
          }

          &--right {
            right: 0;
            left: auto;
          }
        }
      }

      &-dropup {
        &__menu {
          top: unset !important;
          bottom: 100%;

          ${dropdownMenu};

          &--right {
            left: unset !important;
            right: 0;
          }
        }
        .kata-drop-toggle {
          transform: rotate(180deg);
        }
      }

      &-dropright {
        &__menu {
          left: 100% !important;
          top: 0 !important;

          ${dropdownMenu};
        }
        .kata-drop-toggle {
          top: 1px;
          transform: rotate(-90deg);
        }
      }

      &-dropleft {
        &__menu {
          top: 0 !important;
          /*
           * We need to use transform for dropleft because the dropdown menu
           * can't goes over the parent container
           */
          transform: translate3d(calc(-100% - 0.125rem), 0, 0);

          ${dropdownMenu};
        }
        .kata-drop-toggle {
          top: 1px;
          transform: rotate(90deg);
          margin-left: -5px;
          margin-right: 8px;
        }
      }
    }

    .dropdown-menu {
      border: none;
    }
  ` as SimpleInterpolation;
