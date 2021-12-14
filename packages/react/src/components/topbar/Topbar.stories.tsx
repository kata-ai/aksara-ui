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
import { Popover, PopoverTrigger, PopoverContent } from '../popover';

export default {
  title: 'Core/Components/Topbar',
  component: Topbar,
};

export const Example: Story<TopbarProps> = () => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  return (
    <Box width="100%" height="100%" maxHeight={360} backgroundColor="greylight03">
      <Topbar display="flex" alignItems="center" justifyContent="space-between" position="relative">
        <Box display="flex" alignItems="center">
          <svg height={40} viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.96 33.227l-1.978-2.59a3.312 3.312 0 010-4.026l1.889-2.473c2.194-2.871 1.83-7.028-.963-9.333a6.667 6.667 0 00-9.537 1.098l-1.38 1.793v19.625c0 .663-.1 1.322-.295 1.955l1.596 2.09a6.665 6.665 0 009.369 1.254l.062-.044a6.667 6.667 0 001.238-9.349z"
              fill="#006FE6"
            />
            <path
              d="M10.332 4a6.666 6.666 0 00-6.666 6.666v26.666a6.666 6.666 0 0013.036 1.955l-1.487-1.955h-4.889l2.765-2.765-1.41-1.844a6.633 6.633 0 010-8.056l5.31-6.955v-7.044A6.666 6.666 0 0010.326 4L10.332 4z"
              fill="#006FE6"
            />
          </svg>
          <Box marginLeft="xl">
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
        </Box>
        <Box display="flex" alignItems="center" position="absolute" left="50%" sx={{ transform: 'translateX(-50%)' }}>
          <TopbarDisclosureButton>
            <Stack spacing="xs" direction="horizontal" alignItems="center">
              <Avatar
                size="sm"
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
            <TopbarDisclosureButton>
              <Stack spacing="xs" direction="horizontal" alignItems="center">
                <Box role="presentation" size={8} borderRadius={8} backgroundColor="green07" />
                <Stack spacing="xxs" direction="horizontal" alignItems="center" color="greymed04">
                  <Heading as="span" scale={200}>
                    Online
                  </Heading>
                  <IconChevronDown aria-hidden size={12} fill="currentColor" />
                </Stack>
              </Stack>
            </TopbarDisclosureButton>
            <TopbarRoundedButton>
              <VisuallyHidden>Messages</VisuallyHidden>
              <Avatar icon={IconBubble} size="md" color="greymed04" bg="greylight03" />
            </TopbarRoundedButton>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger>
                <TopbarRoundedButton isActive={popoverOpen}>
                  <Box role="presentation" position="relative">
                    <Avatar
                      icon={IconBell}
                      size="md"
                      color="greymed04"
                      bg="greylight03"
                      presence={{
                        label: '99+',
                        position: 'top',
                      }}
                    />
                  </Box>
                  <VisuallyHidden>Notifications</VisuallyHidden>
                </TopbarRoundedButton>
              </PopoverTrigger>
              <PopoverContent placement="bottom" align="end" alignOffset={-12}>
                <Box width={240} px="lg" py="md">
                  Notification content
                </Box>
              </PopoverContent>
            </Popover>
            <TopbarRoundedButton>
              <Avatar name="Adry Muhammad" size="md" />
            </TopbarRoundedButton>
          </Stack>
        </Box>
      </Topbar>
    </Box>
  );
};

export const LogoOnly: Story<TopbarProps> = () => {
  return (
    <Box width="100%" height="100%" maxHeight={360} backgroundColor="greylight03">
      <Topbar display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <svg height={40} viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.96 33.227l-1.978-2.59a3.312 3.312 0 010-4.026l1.889-2.473c2.194-2.871 1.83-7.028-.963-9.333a6.667 6.667 0 00-9.537 1.098l-1.38 1.793v19.625c0 .663-.1 1.322-.295 1.955l1.596 2.09a6.665 6.665 0 009.369 1.254l.062-.044a6.667 6.667 0 001.238-9.349z"
              fill="#006FE6"
            />
            <path
              d="M10.332 4a6.666 6.666 0 00-6.666 6.666v26.666a6.666 6.666 0 0013.036 1.955l-1.487-1.955h-4.889l2.765-2.765-1.41-1.844a6.633 6.633 0 010-8.056l5.31-6.955v-7.044A6.666 6.666 0 0010.326 4L10.332 4z"
              fill="#006FE6"
            />
          </svg>
        </Box>
      </Topbar>
    </Box>
  );
};
