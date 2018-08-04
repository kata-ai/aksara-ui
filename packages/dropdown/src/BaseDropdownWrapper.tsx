import styled, { css } from 'styled-components';

import { defaultTheme } from '@kata-kit/theme';
import DropdownStyles from './DropdownStyles';

export const dropdownMenu = css`
  border-radius: ${defaultTheme.borderRadiuses.borderRadiusSmall};
  box-shadow: ${defaultTheme.layerShadows.layer200Shadow};
`;

export default styled.div`
  ${DropdownStyles};

  .kata-drop-toggle {
    position: relative;
    display: inline-block;
    top: 2px;
    margin-left: 8px;
    font-size: 20px;
    &::before {
      vertical-align: middle;
    }
  }

  .kata {
    &-dropdown {
      &__header {
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.2px;
        color: ${defaultTheme.colors.gray50};
        padding: 0 16px;
      }

      &__item {
        padding: 10px 16px;
        color: ${defaultTheme.colors.gray70} !important;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &--selected {
          color: ${defaultTheme.colors.kataBlue};
        }

        &:hover:not(.disabled) {
          background: ${defaultTheme.colors.gray10};
        }

        &:focus:not(.disabled),
        &:active:not(.disabled) {
          background: ${defaultTheme.colors.gray10};
          color: ${defaultTheme.colors.kataBlue} !important;
        }
      }

      &__menu {
        ${dropdownMenu};

        &--open {
          button {
            color: ${defaultTheme.colors.white};
            background-color: ${defaultTheme.colors.gray70} !important;
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
        // We need to use transform for dropleft because the dropdown menu
        // can't goes over the parent container
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
`;
