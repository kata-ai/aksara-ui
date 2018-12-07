import { css, SimpleInterpolation } from 'styled-components';

const styles = () =>
  css`
    display: inline-block;
    padding: 2px 4px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.45;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
  ` as SimpleInterpolation;

export default styles;
