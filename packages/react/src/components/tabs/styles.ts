import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from '../../layout';
import { UnstyledButtonProps } from '../button';
import { TabsSizeVariants, tabPanelsSizeVariants } from './variants';

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

export const BaseTabPanels = styled(Box)<BaseBoxProps>`
  ${variant({ prop: 'tabsSize', variants: tabPanelsSizeVariants })}
`;
