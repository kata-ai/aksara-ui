import * as React from 'react';
import { storiesOf } from '@storybook/react';

import RootWrapper from '@storybook-utils/components/Wrapper';

import { Dashboard, DashboardCards } from '@kata-kit/dashboard/src';
import { Container } from '@kata-kit/layout/src';
import Card from '@kata-kit/card/src/Card';
import Avatar from '@kata-kit/avatar/src/components/Avatar';
import Button from '@kata-kit/button/src/components/Button';
import CardButton from '@kata-kit/card/src/CardButton';

const story = storiesOf('Foundations|Dashboard', module);

story
  .addDecorator(storyFn => <RootWrapper noPadding>{storyFn()}</RootWrapper>)
  .add('default', () => (
    <Dashboard title="kata-kit Demo">DashboardContent</Dashboard>
  ));

story
  .addDecorator(storyFn => <RootWrapper noPadding>{storyFn()}</RootWrapper>)
  .add('starter', () => (
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
      DashboardContent
    </Dashboard>
  ));

story
  .addDecorator(storyFn => <RootWrapper>{storyFn()}</RootWrapper>)
  .add('dashboard cards', () => (
    <Container>
      <DashboardCards>
        <Card asButton>
          <CardButton label={'Create'} icon="add" />
        </Card>
        <Card
          title="Second Card"
          avatarComponent={
            <Avatar src="https://picsum.photos/350/150/?image=821" />
          }
          action={
            <Button color="secondary" isIcon>
              <i className="icon-more" />
            </Button>
          }
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Card>
        <Card title="Third Card">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </Card>
      </DashboardCards>
    </Container>
  ));
