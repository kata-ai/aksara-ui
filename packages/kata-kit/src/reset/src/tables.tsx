import { css } from 'styled-components';

import { colors } from './utils/variables';

export default css`
  .table {
    width: 100%;

    thead {
      border-top: solid 1px ${colors.gray30};
      border-bottom: solid 2px ${colors.gray30};

      th {
        padding: 16px;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;
        color: ${colors.gray80};
      }
    }

    tbody {
      tr {
        border-bottom: solid 1px ${colors.gray30};

        td {
          padding: 12px 16px;
          vertical-align: middle;
          font-size: 13px;

          color: ${colors.gray70};
        }
      }
    }

    &.striped {
      tbody {
        tr {
          &:nth-child(odd) {
            background: ${colors.gray10};
          }
        }
      }
    }

    &.hover {
      tbody {
        tr {
          &:hover {
            background: ${colors.gray20};
          }
        }
      }
    }
  }
`;
