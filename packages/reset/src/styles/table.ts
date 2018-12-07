import { css, SimpleInterpolation } from 'styled-components';
import { variables } from '@kata-kit/theme';

const table: SimpleInterpolation = css`
  .table {
    width: 100%;

    thead {
      border-top: solid 1px ${variables.colors.gray30};
      border-bottom: solid 2px ${variables.colors.gray30};

      th {
        padding: 16px;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;
        color: ${variables.colors.gray80};
      }
    }

    tbody {
      tr {
        border-bottom: solid 1px ${variables.colors.gray30};

        td {
          padding: 12px 16px;
          vertical-align: middle;
          font-size: 13px;

          color: ${variables.colors.gray70};
        }
      }
    }

    &.striped {
      tbody {
        tr {
          &:nth-child(odd) {
            background: ${variables.colors.gray10};
          }
        }
      }
    }

    &.hover {
      tbody {
        tr {
          &:hover {
            background: ${variables.colors.gray20};
          }
        }
      }
    }
  }
`;

export default table;
