// tslint:disable:no-console
import React from 'react';

import { Button, FloatingButton, SupportButton } from '@kata-kit/button';
import { DashboardCard, CardGrid } from '@kata-kit/card';
import { EmptyMessage, Board } from '@kata-kit/common';
import { Dashboard, DashboardContentHeader } from '@kata-kit/dashboard';
import { Banner } from '@kata-kit/banner';

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
      <DashboardCard title="Card 1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </DashboardCard>
      <DashboardCard title="Card 2">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </DashboardCard>
      <DashboardCard title="Card 3">
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
      <FloatingButton icon="bot" /> <FloatingButton icon="bot" disabled />{' '}
      <SupportButton>SupportButton</SupportButton>{' '}
      <SupportButton loading>Loading</SupportButton>{' '}
    </Board>
    <DashboardContentHeader isSecondary>Empty Message</DashboardContentHeader>
    <Board>
      <EmptyMessage title="Empty Message">Empty message example.</EmptyMessage>
    </Board>
    <DashboardContentHeader isSecondary>Banners</DashboardContentHeader>
    <div>
      <Banner state="success" message="Hallo" />
      <Banner
        state="info"
        message="Hallo"
        onClose={() => console.log('test')}
      />
      <Banner state="error" message="Hallo" />
      <Banner state="warning" message="Hallo" />
    </div>
  </Dashboard>
);
