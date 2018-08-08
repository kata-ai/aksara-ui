// tslint:disable:no-console
import React from 'react';
import styled from 'styled-components';

import {
  Button,
  FloatingButton,
  SupportButton,
  ToggleButton,
  ButtonGroup
} from '@kata-kit/button';
import { DashboardCard, CardGrid } from '@kata-kit/card';
import { EmptyMessage, Board } from '@kata-kit/common';
import { Dashboard, DashboardContentHeader } from '@kata-kit/dashboard';
import { Banner } from '@kata-kit/banner';
import { Pagination } from '@kata-kit/pagination';
import { TooltipTarget, Tooltip } from '@kata-kit/tooltip';
import { KataReset, Theme, variables } from '@kata-kit/theme';
import { Badge } from '@kata-kit/badge';
import { SplitButton } from '@kata-kit/split-button';
import { DropdownItem } from '@kata-kit/dropdown';

// since we don't use <Reset /> yet, paragraph text color is still overridden
// globally, so this is temporary.
const ThemeDemo = styled(KataReset)`
  padding: 12px;
`;

export default () => (
  <Dashboard
    isStarter
    title="kata-kit Demo"
    headerContent={
      <p>
        This project is intended to test the look and feel of the kata-kit
        component, as well as a development environment.
      </p>
    }
  >
    <DashboardContentHeader>Cards</DashboardContentHeader>
    <CardGrid>
      <DashboardCard title="First Card">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </DashboardCard>
      <DashboardCard title="Second Card">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </DashboardCard>
      <DashboardCard
        title="Card With Action"
        action={
          <Button color="secondary" isIcon>
            <i className="icon-more" />
          </Button>
        }
      >
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </DashboardCard>
    </CardGrid>
    <DashboardContentHeader isSecondary>Typography</DashboardContentHeader>
    <Board>
      <h1>Understanding Conversation, Humanizing Interaction</h1>
      <h2>Understanding Conversation, Humanizing Interaction</h2>
      <h3>Understanding Conversation, Humanizing Interaction</h3>
      <h4>Understanding Conversation, Humanizing Interaction</h4>
      <h5 className="text-label">
        Understanding Conversation, Humanizing Interaction
      </h5>
      <h6 className="text-small">
        Understanding Conversation, Humanizing Interaction
      </h6>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p>
        Text with a link will{' '}
        <a
          href="https://www.youtube.com/watch?v=BVggF2TxSu8"
          target="_blank"
          rel="noopener noreferrer"
        >
          look like this
        </a>.
      </p>
    </Board>
    <DashboardContentHeader isSecondary>Button</DashboardContentHeader>
    <Board>
      <div style={{ marginBottom: '8px' }}>
        <Button color="primary">Primary Button</Button>{' '}
        <Button color="secondary">Secondary Button</Button>{' '}
        <Button color="primary" disabled>
          Disabled Button
        </Button>{' '}
        <Button color="primary" loading>
          Loading
        </Button>{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Button color="success">Success Button</Button>{' '}
        <Button color="warning">Warning Button</Button>{' '}
        <Button color="danger">Danger Button</Button>{' '}
        <Button color="white">White Button</Button>{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <ButtonGroup>
          <Button color="primary">Button Group 1</Button>
          <Button>Button Group 2</Button>
        </ButtonGroup>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Button color="primary" size="sm">
          Small Button
        </Button>{' '}
        <Button color="secondary" size="sm" outline>
          Small Button
        </Button>{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Button color="secondary" isIcon>
          <i className="icon-bot" />
        </Button>{' '}
        <Button color="secondary" isIcon disabled>
          <i className="icon-bot" />
        </Button>{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <FloatingButton icon="bot" /> <FloatingButton icon="bot" disabled />{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <SupportButton>SupportButton</SupportButton>{' '}
        <SupportButton loading>Loading</SupportButton>{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <ToggleButton
          renderActive={() => <Button>ToggleButton</Button>}
          renderInactive={() => <Button>ToggleButton Inactive</Button>}
        />{' '}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Button block color="primary">
          Block Button
        </Button>{' '}
      </div>
    </Board>
    <DashboardContentHeader isSecondary>Split Button</DashboardContentHeader>
    <Board>
      <div style={{ marginBottom: '8px' }}>
        <SplitButton title="Publish" color="primary">
          <DropdownItem>Dropdown Item 1</DropdownItem>
          <DropdownItem>Dropdown Item 2</DropdownItem>
        </SplitButton>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <SplitButton
          title="Prediction Filter"
          color="white"
          subtitle="All"
          size="sm"
        >
          <DropdownItem>None</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem>All</DropdownItem>
        </SplitButton>
      </div>
    </Board>
    <DashboardContentHeader isSecondary>Empty Message</DashboardContentHeader>
    <Board>
      <EmptyMessage title="Empty Message">Empty message example.</EmptyMessage>
    </Board>
    <DashboardContentHeader isSecondary>Badge</DashboardContentHeader>
    <Board>
      <Badge>entity</Badge> <Badge color="primary">primary</Badge>{' '}
      <Badge color="secondary">secondary</Badge>{' '}
      <Badge color="success">success</Badge>{' '}
      <Badge color="warning">warning</Badge>{' '}
      <Badge color="danger">danger</Badge>{' '}
    </Board>
    <DashboardContentHeader isSecondary>Theme Reset</DashboardContentHeader>
    <Theme>
      {theme => (
        <ThemeDemo {...theme}>
          <p>
            Default Reset (backgroundColor: {theme.backgroundColor}, textColor:{' '}
            {theme.textColor})
          </p>
          <Theme
            values={{
              backgroundColor: variables.colors.gray80,
              textColor: variables.colors.gray20
            }}
          >
            {innerTheme => (
              <ThemeDemo {...innerTheme}>
                <p style={{ marginBottom: 0 }}>
                  Modified Reset (backgroundColor: {innerTheme.backgroundColor},
                  textColor: {innerTheme.textColor})
                </p>
              </ThemeDemo>
            )}
          </Theme>
        </ThemeDemo>
      )}
    </Theme>
    <DashboardContentHeader isSecondary>Banners</DashboardContentHeader>
    <div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="success"
          message="A banner! - You've succesfully read it."
          onClose={() => console.log('onClose')}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="info"
          message="This banner shows information that isn't critical, but worth knowing."
          onClose={() => console.log('onClose')}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="error"
          message="Uh oh, something's not right with this banner - try fixing some things?"
          onClose={() => console.log('onClose')}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="warning"
          message="Heads up - this baner isn't looking good, tread with caution."
          onClose={() => console.log('onClose')}
        />
      </div>
    </div>
    <DashboardContentHeader isSecondary>Pagination</DashboardContentHeader>
    <Board>
      <div style={{ marginBottom: '8px' }}>
        <Pagination
          current={3}
          total={50}
          onSelect={select => console.log('selected', select)}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Pagination
          current={1}
          total={50}
          onSelect={select => console.log('selected', select)}
        />
      </div>
      <div>
        <Pagination
          current={22}
          total={50}
          onSelect={select => console.log('selected', select)}
        />
      </div>
    </Board>
    <DashboardContentHeader isSecondary>Tooltip</DashboardContentHeader>
    <Board>
      <TooltipTarget component={<Tooltip>Hello! This is a tooltip.</Tooltip>}>
        <span>Hover over me!</span>
      </TooltipTarget>
    </Board>
  </Dashboard>
);
