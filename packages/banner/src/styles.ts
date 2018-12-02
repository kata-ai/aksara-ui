import { css, SimpleInterpolation } from 'styled-components';

const BannerBase = () =>
  css`
    display: flex;
    align-items: center;
    min-height: 38px;
    padding: 12px 16px;
    border-radius: 4px;
    line-height: 1;
  ` as SimpleInterpolation;

export default BannerBase;
