import { Story } from '@storybook/react';
import { IconChevronRight } from '@aksara-ui/icons';
import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from '..';
import { Box } from '../../layout';
import Topbar, { TopbarProps } from './Topbar';

export default {
  title: 'Core/Layout/Topbar',
  component: Topbar,
};

export const Example: Story<TopbarProps> = () => {
  return (
    <Box width="100%" height="100%" maxHeight={360} backgroundColor="greylight03">
      <Topbar display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Breadcrumb
            items={[
              <BreadcrumbItem href="/">Channels</BreadcrumbItem>,
              <BreadcrumbItem href="/item-1">PT. Angin Ribut Sentosa</BreadcrumbItem>,
              <BreadcrumbItem href="/item-2" active>
                main_issue_template
              </BreadcrumbItem>,
            ]}
            separator={IconChevronRight}
          />
        </Box>
        <Box display="flex" alignItems="center">
          Workspace Switcher
        </Box>
        <Box display="flex" alignItems="center">
          Status
        </Box>
      </Topbar>
    </Box>
  );
};
