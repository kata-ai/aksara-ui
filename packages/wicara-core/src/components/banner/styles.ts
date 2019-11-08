import { css } from 'styled-components';
import bannerThemes from './theme';

export type BannerStates = keyof typeof bannerThemes;

export interface BaseBannerProps {
  state?: BannerStates;
}

const BaseBannerStyles = ({ state = 'error' }: BaseBannerProps) =>
  css`
    display: flex;
    align-items: center;
    min-height: 38px;
    padding: 12px 16px;
    border-radius: 4px;
    line-height: 1;
    background-color: ${bannerThemes[state].backgroundColor};
    color: ${bannerThemes[state].textColor};
  `;

export default BaseBannerStyles;
