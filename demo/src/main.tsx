import React from 'react';

import { Button } from '@kata-kit/button';
import { Card, CardGrid } from '@kata-kit/card';
import { EmptyMessage } from '@kata-kit/common';
import { DashboardRoot, Content, Sidebar } from '@kata-kit/layout';

const Main = () => (
  <DashboardRoot>
    <Sidebar>Sidebar</Sidebar>
    <Content>
      <div>
        <div>
          <h1>kata-kit Demo</h1>
          <p>
            This project is intended to test the look and feel of the kata-kit
            component, as well as a development environment.
          </p>
        </div>
        <div>
          <h2>Typography</h2>
          <div>
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
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div>
          <h2>Button</h2>
          <div>
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
          </div>
        </div>
        <div>
          <h2>Card</h2>
          <div>
            <CardGrid>
              <Card title="Card 1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Card>
              <Card title="Card 2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Card>
              <Card title="Card 3">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Card>
            </CardGrid>
          </div>
        </div>
        <div>
          <h2>Empty Message</h2>
          <div>
            <EmptyMessage title="Empty Message">
              Empty message example.
            </EmptyMessage>
          </div>
        </div>
      </div>
    </Content>
  </DashboardRoot>
);

export default Main;
