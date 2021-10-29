import { Story } from '@storybook/react';
import { IconBell, IconBubble, IconChevronDown, IconChevronRight, IconFlowerGrid } from '@aksara-ui/icons';
import * as React from 'react';
import { VisuallyHidden } from '../../helpers';
import { Box, Stack } from '../../layout';
import { Avatar } from '../avatar';
import { Breadcrumb, BreadcrumbItem } from '../breadcrumb';
import Topbar, { TopbarProps } from './Topbar';
import TopbarRoundedButton from './TopbarRoundedButton';
import TopbarDisclosureButton from './TopbarDisclosureButton';
import { Heading } from '../../typography';

export default {
  title: 'Core/Components/Topbar',
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
          <TopbarDisclosureButton>
            <Stack spacing="xs" direction="horizontal" alignItems="center">
              <Avatar
                size="md"
                backgroundColor="greylight03"
                color="greymed04"
                icon={IconFlowerGrid}
                name="Workspace"
              />
              <Stack spacing="xxs" direction="horizontal" alignItems="center" color="greymed04">
                <Heading as="span" scale={200} color="greydark02">
                  Workspace
                </Heading>
                <IconChevronDown aria-hidden size={12} fill="currentColor" />
              </Stack>
            </Stack>
          </TopbarDisclosureButton>
        </Box>
        <Box display="flex" alignItems="center">
          <Stack direction="horizontal" spacing="md" alignItems="center">
            <TopbarRoundedButton>
              <VisuallyHidden>Messages</VisuallyHidden>
              <IconBubble aria-hidden fill="currentColor" />
            </TopbarRoundedButton>
            <TopbarRoundedButton>
              <VisuallyHidden>Notifications</VisuallyHidden>
              <IconBell aria-hidden fill="currentColor" />
            </TopbarRoundedButton>
            <TopbarRoundedButton>
              <Avatar name="Adry Muhammad" size="md" />
            </TopbarRoundedButton>
          </Stack>
        </Box>
      </Topbar>
    </Box>
  );
};
