import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import { Box, Heading, Stack, Text } from '../../../../foundations';
import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../../../utils/storybook';
import { LinkButton } from '../LinkButton';
import Button from './Button';

export default {
  title: 'Core|Components/Button/Button',
  component: Button,
  decorators: [SystemWrapper],
};

export const Example = () => (
  <SystemBlock title="Button" subtitle="It's a button. What more do you expect?">
    <SystemSubheading mb="xl">Default Theme</SystemSubheading>
    <Stack spacing="xl">
      <ComponentBlock title="Default Button">
        <Box display="flex" flexWrap="wrap">
          <Box p="md" backgroundColor="grey02">
            <Button type="button" variant="primary" onClick={action('button-click')}>
              Primary
            </Button>
          </Box>
          <Box p="md" backgroundColor="grey02">
            <Button type="button" variant="outline" onClick={action('button-click')}>
              Outline
            </Button>
          </Box>
          <Box p="md" backgroundColor="grey02">
            <Button type="button" variant="destructive" onClick={action('button-click')}>
              Destructive
            </Button>
          </Box>
          <Box p="md" backgroundColor="grey02">
            <Button type="button" variant="primary" icon={IconPen} onClick={action('button-click')}>
              Primary With Icon
            </Button>
          </Box>
          <Box p="md" backgroundColor="grey02">
            <Button type="button" variant="outline" icon={IconPen} onClick={action('button-click')}>
              Outline With Icon
            </Button>
          </Box>
          <Box p="md" backgroundColor="blue08">
            <Button type="button" variant="inverse" onClick={action('button-click')}>
              Inverse
            </Button>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Link Button (TODO)">
        <Box display="flex" flexWrap="wrap">
          <Box p="md" backgroundColor="grey02">
            <LinkButton variant="primary" onClick={action('button-click')}>
              Primary Link
            </LinkButton>
          </Box>
          <Box p="md" backgroundColor="grey02">
            <LinkButton variant="destructive" onClick={action('button-click')}>
              Destructive Link
            </LinkButton>
          </Box>
          <Box p="md" backgroundColor="grey02">
            <LinkButton variant="primary" icon={IconPen} onClick={action('button-click')}>
              Primary Link with Icon
            </LinkButton>
          </Box>
          <Box p="md" backgroundColor="blue08">
            <LinkButton variant="inverse" onClick={action('button-click')}>
              Inverse Link
            </LinkButton>
          </Box>
        </Box>
      </ComponentBlock>
    </Stack>

    <SystemSubheading my="xl">Button States</SystemSubheading>
    <Stack spacing="xl">
      <ComponentBlock title="Default Button">
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Default</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" variant="primary">
                  Primary
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" variant="outline">
                  Outline
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" variant="destructive">
                  Destructive
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" variant="primary" icon={IconPen}>
                  Primary With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" variant="outline" icon={IconPen}>
                  Outline With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <Button type="button" variant="inverse">
                  Inverse
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Hover</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="hover" variant="primary">
                  Primary
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="hover" variant="outline">
                  Outline
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="hover" variant="destructive">
                  Destructive
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="hover" variant="primary" icon={IconPen}>
                  Primary With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="hover" variant="outline" icon={IconPen}>
                  Outline With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <Button type="button" className="hover" variant="inverse">
                  Inverse
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Focus</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="focus" variant="primary">
                  Primary
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="focus" variant="outline">
                  Outline
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="focus" variant="destructive">
                  Destructive
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="focus" variant="primary" icon={IconPen}>
                  Primary With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" className="focus" variant="outline" icon={IconPen}>
                  Outline With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <Button type="button" className="focus" variant="inverse">
                  Inverse
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Disabled</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" disabled variant="primary">
                  Primary
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" disabled variant="outline">
                  Outline
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" disabled variant="destructive">
                  Destructive
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" disabled variant="primary" icon={IconPen}>
                  Primary With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" disabled variant="outline" icon={IconPen}>
                  Outline With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <Button type="button" disabled variant="inverse">
                  Inverse
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Loading</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" isLoading variant="primary">
                  Primary
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" isLoading variant="outline">
                  Outline
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" isLoading variant="destructive">
                  Destructive
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" isLoading variant="primary" icon={IconPen}>
                  Primary With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <Button type="button" isLoading variant="outline" icon={IconPen}>
                  Outline With Icon
                </Button>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <Button type="button" isLoading variant="inverse">
                  Inverse
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Link Button">
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Default</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" variant="primary">
                  Primary Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" variant="destructive">
                  Destructive Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" variant="primary" icon={IconPen}>
                  Primary Link With Icon
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <LinkButton type="button" variant="inverse">
                  Inverse
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Hover</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" className="hover" variant="primary">
                  Primary Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" className="hover" variant="destructive">
                  Destructive Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" className="hover" variant="primary" icon={IconPen}>
                  Primary Link With Icon
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <LinkButton type="button" className="hover" variant="inverse">
                  Inverse
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Focus</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" className="focus" variant="primary">
                  Primary Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" className="focus" variant="destructive">
                  Destructive Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" className="focus" variant="primary" icon={IconPen}>
                  Primary Link With Icon
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <LinkButton type="button" className="focus" variant="inverse">
                  Inverse
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Disabled</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" disabled variant="primary">
                  Primary Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" disabled variant="destructive">
                  Destructive Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" disabled variant="primary" icon={IconPen}>
                  Primary Link With Icon
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <LinkButton type="button" disabled variant="inverse">
                  Inverse
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="calc(1116px / 12) 1fr" gridGap="24px">
          <Box display="flex" alignItems="center">
            <Text scale={300}>Loading</Text>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap">
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" isLoading variant="primary">
                  Primary Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" isLoading variant="destructive">
                  Destructive Link
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="grey02">
                <LinkButton type="button" isLoading variant="primary" icon={IconPen}>
                  Primary Link With Icon
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" p="md" backgroundColor="blue08">
                <LinkButton type="button" isLoading variant="inverse">
                  Inverse
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </ComponentBlock>
    </Stack>

    <SystemSubheading my="xl">Button Sizes</SystemSubheading>
    <Stack spacing="xl">
      <ComponentBlock title="Default Button">
        <Box
          mt="md"
          mb="xl"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 8 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" flexDirection="column">
            <Heading as="h4" scale={200}>
              Size 32
            </Heading>
            <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="primary" size={32}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="outline" size={32}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="destructive" size={32}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="primary" icon={IconPen} size={32}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="outline" icon={IconPen} size={32}>
                  Push Me
                </Button>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Heading as="h4" scale={200}>
              Size 40
            </Heading>
            <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="primary" size={40}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="outline" size={40}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="destructive" size={40}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="primary" icon={IconPen} size={40}>
                  Push Me
                </Button>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <Button type="button" variant="outline" icon={IconPen} size={40}>
                  Push Me
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Link Button">
        <Box
          mt="md"
          mb="xl"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 8 - 24px), 1fr))"
          gridGap="24px"
        >
          <Box display="flex" flexDirection="column">
            <Heading as="h4" scale={200}>
              Size 32
            </Heading>
            <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <LinkButton type="button" variant="primary" size={32}>
                  Push Me
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <LinkButton type="button" variant="destructive" size={32}>
                  Push Me
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <LinkButton type="button" variant="primary" icon={IconPen} size={32}>
                  Push Me
                </LinkButton>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Heading as="h4" scale={200}>
              Size 40
            </Heading>
            <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <LinkButton type="button" variant="primary" size={40}>
                  Push Me
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <LinkButton type="button" variant="destructive" size={40}>
                  Push Me
                </LinkButton>
              </Box>
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <LinkButton type="button" variant="primary" icon={IconPen} size={40}>
                  Push Me
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const AdditionalProps = () => (
  <SystemBlock title="Button" subtitle="It's a button. What more do you expect?">
    <SystemSubheading mb="xl">Additional Props</SystemSubheading>
    <Stack spacing="xl">
      <ComponentBlock title="Block Button" withBackground>
        <Button type="button" variant="primary" block>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Loading" withBackground>
        <Button type="button" size={32} variant="primary" isLoading style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" size={40} variant="primary" isLoading style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" size={48} variant="primary" isLoading>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (left)" withBackground>
        <Button
          type="button"
          size={32}
          variant="primary"
          icon={IconPen}
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button
          type="button"
          size={40}
          variant="primary"
          icon={IconPen}
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button type="button" size={48} variant="primary" icon={IconPen} iconPosition="left">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)" withBackground>
        <Button
          type="button"
          size={32}
          variant="primary"
          icon={IconPen}
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button
          size={40}
          type="button"
          variant="primary"
          icon={IconPen}
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button size={48} type="button" variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (block)" withBackground>
        <Button type="button" block variant="primary" icon={IconPen} style={{ marginBottom: 16 }}>
          Push Me
        </Button>
        <Button type="button" block variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons loading" withBackground>
        <Button type="button" isLoading variant="primary" icon={IconPen} size={32} style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" isLoading variant="primary" icon={IconPen}>
          Push Me
        </Button>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
