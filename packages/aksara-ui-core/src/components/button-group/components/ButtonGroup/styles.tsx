import { css } from 'styled-components';

export const buttonGroupSegmented = css`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 0;
  margin-left: 0;
`;

export const buttonGroupNonSegmented = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -${props => props.theme.space.sm}px;
  margin-left: -${props => props.theme.space.sm}px;
`;

export const buttonGroupInnerSegmented = css`
  position: relative;
  margin-top: 0;
  margin-left: 0;
`;

export const buttonGroupInnerNonSegmented = css`
  margin-top: ${props => props.theme.space.sm}px;
  margin-left: ${props => props.theme.space.sm}px;
`;
