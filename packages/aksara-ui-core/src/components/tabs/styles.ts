import styled from 'styled-components';
import { variant } from 'styled-system';
import { tabButtonSizeVariants, tabListSizeVariants, TabsSizeVariants, tabPanelsSizeVariants } from './variants';

export interface BaseTabsProps {
  /** Size of the tabs. */
  size?: TabsSizeVariants;
  /** The initial index of the selected tab */
  defaultIndex?: number;
}

export const MainTabs = styled('div')<BaseTabsProps>`
  display: block;

  .tablist {
    ${variant({ prop: 'size', variants: tabListSizeVariants })}

    .tabbutton {
      ${variant({ prop: 'size', variants: tabButtonSizeVariants })}
    }
  }
  .tabpanels {
    ${variant({ prop: 'size', variants: tabPanelsSizeVariants })}
  }
`;
