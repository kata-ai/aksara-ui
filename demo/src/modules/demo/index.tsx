// tslint:disable:no-console
import React from 'react';

import {
  Button,
  FloatingButton,
  SupportButton,
  ToggleButton
} from '@kata-kit/button';
import { DashboardCard, CardGrid } from '@kata-kit/card';
import { EmptyMessage, Board } from '@kata-kit/common';
import { Dashboard, DashboardContentHeader } from '@kata-kit/dashboard';
import { Banner } from '@kata-kit/banner';
import { Pagination } from '@kata-kit/pagination';
import { TooltipTarget, Tooltip } from '@kata-kit/tooltip';
import { Badge } from '@kata-kit/badge';

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
    </Board>
    <DashboardContentHeader isSecondary>Button</DashboardContentHeader>
    <Board>
      {/* stylable won't work if we set a custom className inside the component */}
      <Button>Demo Component</Button>{' '}
      <Button color="primary">Primary Button</Button>{' '}
      <Button color="secondary">Secondary Button</Button>{' '}
      <Button color="danger">Danger Button</Button>{' '}
      <Button color="primary" disabled>
        Disabled Button
      </Button>{' '}
      <Button color="primary" loading>
        Loading
      </Button>{' '}
      <Button color="primary" size="sm">
        Small Button
      </Button>{' '}
      <Button color="secondary" size="sm" outline>
        Small Button
      </Button>{' '}
      <Button color="secondary" isIcon>
        <i className="icon-bot" />
      </Button>{' '}
      <FloatingButton icon="bot" /> <FloatingButton icon="bot" disabled />{' '}
      <SupportButton>SupportButton</SupportButton>{' '}
      <SupportButton loading>Loading</SupportButton>{' '}
      <ToggleButton
        renderActive={() => <Button>ToggleButton</Button>}
        renderInactive={() => <Button>ToggleButton Inactive</Button>}
      />{' '}
    </Board>
    <DashboardContentHeader isSecondary>Empty Message</DashboardContentHeader>
    <Board>
      <EmptyMessage title="Empty Message">Empty message example.</EmptyMessage>
    </Board>
    <DashboardContentHeader isSecondary>Badge</DashboardContentHeader>
    <Board>
      <Badge>entity</Badge>
    </Board>
    <DashboardContentHeader isSecondary>Banners</DashboardContentHeader>
    <div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="success"
          message="An alert! - You've succesfully read it."
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="info"
          message="This alert doesn't show any importance, but it's worth checking out."
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="error"
          message="Uh oh, something's not right with this alert - try fixing some things?"
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="warning"
          message="Warning - best check yourself, this alert isn't looking good."
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
