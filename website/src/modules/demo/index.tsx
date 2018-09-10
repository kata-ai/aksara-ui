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
import { InputText } from '@kata-kit/form';

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
        scrambled it to make a <strong>type specimen book</strong>. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
      </p>
      <p>
        Text with a link will{' '}
        <a
          href="https://www.youtube.com/watch?v=BVggF2TxSu8"
          target="_blank"
          rel="noopener noreferrer"
        >
          look like this
        </a>
        .
      </p>
    </Board>
    <DashboardContentHeader isSecondary>Tables</DashboardContentHeader>
    <Board>
      <table className="striped hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@kata-kit/button</td>
            <td>Button component</td>
            <td>1.0.0</td>
          </tr>
          <tr>
            <td>@kata-kit/card</td>
            <td>Card component</td>
            <td>1.0.4</td>
          </tr>
          <tr>
            <td>@kata-kit/theme</td>
            <td>Theming framework</td>
            <td>2.1.0</td>
          </tr>
        </tbody>
      </table>
    </Board>
    <DashboardContentHeader isSecondary>Button</DashboardContentHeader>
    <Board>
      <h3>Primary</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="primary">Default</Button>{' '}
        <Button color="primary" className="active">
          Active
        </Button>{' '}
        <Button color="primary" disabled>
          Disabled
        </Button>{' '}
        <Button color="primary" loading>
          Loading
        </Button>{' '}
      </div>
      <h3>Secondary</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="secondary">Default</Button>{' '}
        <Button color="secondary" active>
          Active
        </Button>{' '}
        <Button color="secondary" disabled>
          Disabled
        </Button>{' '}
        <Button color="secondary" loading>
          Loading
        </Button>{' '}
      </div>
      <h3>Success</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="success">Default</Button>{' '}
        <Button color="success" className="active">
          Active
        </Button>{' '}
        <Button color="success" disabled>
          Disabled
        </Button>{' '}
        <Button color="success" loading>
          Loading
        </Button>{' '}
      </div>
      <h3>Warning</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="warning">Default</Button>{' '}
        <Button color="warning" className="active">
          Active
        </Button>{' '}
        <Button color="warning" disabled>
          Disabled
        </Button>{' '}
        <Button color="warning" loading>
          Loading
        </Button>{' '}
      </div>
      <h3>Danger</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="danger">Default</Button>{' '}
        <Button color="danger" className="active">
          Active
        </Button>{' '}
        <Button color="danger" disabled>
          Disabled
        </Button>{' '}
        <Button color="danger" loading>
          Loading
        </Button>{' '}
      </div>
      <h3>White</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="white">Default</Button>{' '}
        <Button color="white" className="active">
          Active
        </Button>{' '}
        <Button color="white" disabled>
          Disabled
        </Button>{' '}
        <Button color="white" loading>
          Loading
        </Button>{' '}
      </div>
      <h3>Button Group</h3>
      <div style={{ marginBottom: '8px' }}>
        <ButtonGroup>
          <Button color="primary">Button Group 1</Button>
          <Button>Button Group 2</Button>
        </ButtonGroup>
      </div>
      <h3>Small Button</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="primary" size="sm">
          Small Button
        </Button>{' '}
        <Button color="secondary" size="sm" outline>
          Small Button
        </Button>{' '}
      </div>
      <h3>Icon Button</h3>
      <div style={{ marginBottom: '8px' }}>
        <Button color="secondary" isIcon>
          <i className="icon-bot" />
        </Button>{' '}
        <Button color="secondary" isIcon disabled>
          <i className="icon-bot" />
        </Button>{' '}
      </div>
      <h3>Floating Button</h3>
      <div style={{ marginBottom: '8px' }}>
        <FloatingButton icon="bot" /> <FloatingButton icon="bot" disabled />{' '}
      </div>
      <h3>Support Button</h3>
      <div style={{ marginBottom: '8px' }}>
        <SupportButton>SupportButton</SupportButton>{' '}
        <SupportButton loading>Loading</SupportButton>{' '}
      </div>
      <h3>Toggle Button</h3>
      <div style={{ marginBottom: '8px' }}>
        <ToggleButton
          renderActive={() => <Button>ToggleButton</Button>}
          renderInactive={() => <Button>ToggleButton Inactive</Button>}
        />{' '}
      </div>
      <h3>Block Button</h3>
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
    <DashboardContentHeader isSecondary>Forms</DashboardContentHeader>
    <Board>
      <InputText placeholder="Type something..." />{' '}
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
          message="Heads up - this banner isn't looking good, tread with caution."
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
      <TooltipTarget
        placement="right"
        component={<Tooltip>Hello! This is a tooltip.</Tooltip>}
      >
        <span>Hover over me!</span>
      </TooltipTarget>
    </Board>
  </Dashboard>
);
