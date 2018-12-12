import { css } from 'styled-components';

export const SplitButtonBase = () =>
  css`
    .kata-splitbutton__toggle {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border-top-right-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
      margin-left: -2px;
      padding: 10px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);

      .kata-drop-toggle {
        margin: 0;
        top: 0;
      }
    }

    .kata-splitbutton__toggle--withtext {
      padding: 6px 16px;

      .kata-drop-toggle {
        margin-left: 8px;
        vertical-align: middle;
      }
    }

    .kata-splitbutton--small {
      .kata-dropdown .kata-btn {
        padding: 6px 8px;
      }

      .kata-dropdown .kata-splitbutton__toggle--withtext {
        padding: 6px 16px;
      }

      .kata-btn {
        height: 32px;
        padding: 6px 16px;
      }

      .kata-dropdown__item {
        padding: 6px 16px;
      }

      .kata-splitbutton__toggle--withtext .kata-drop-toggle {
        margin-left: 4px;
        margin-top: -3px;
      }
    }
  `;
