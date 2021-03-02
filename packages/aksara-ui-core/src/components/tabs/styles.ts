import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps, UnstyledButton, UnstyledButtonProps } from '../../foundations';
import { theme } from '../../theme';
import { tabButtonSizeVariants, tabListSizeVariants, TabsSizeVariants, tabPanelsSizeVariants } from './variants';

export interface BaseTabsProps {
  /** Size of the tabs. */
  tabsSize?: TabsSizeVariants;
  /** The initial index of the selected tab */
  defaultIndex?: number;
}

export type BaseBoxProps = BaseTabsProps & BoxProps;

export interface BaseButtonProps extends BaseTabsProps, UnstyledButtonProps {
  active?: boolean;
}

export const BaseTabList = styled(Box)<BaseBoxProps>`
  ${variant({ prop: 'tabsSize', variants: tabListSizeVariants })}
`;

export const BaseTabButton = styled(UnstyledButton)<BaseButtonProps>`
  outline: none;
  transition: all 0.2s ease 0s;
  ${variant({ prop: 'tabsSize', variants: tabButtonSizeVariants })}

  &:hover {
    border-bottom: 2px solid ${theme.colors.grey04};
  }

  ${props =>
    props.active &&
    css`
      font-weight: 500;
      color: ${theme.colors.blue07};
      border-bottom: 2px solid ${theme.colors.blue08};
    `};
`;

export const BaseTabPanels = styled(Box)<BaseBoxProps>`
  ${variant({ prop: 'tabsSize', variants: tabPanelsSizeVariants })}
`;
