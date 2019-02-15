# @kata-kit/dashboard

> Dashboard component for Wicara.

## Install

```sh
# yarn
yarn add @kata-kit/dashboard
# npm
npm install @kata-kit/dashboard
```

## Usage

To use this component within your React app, import as follows:

```jsx
import { Dashboard } from '@kata-kit/dashboard';

const Component = () => (
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
    ...
  </Dashboard>
);
```

### Dashboard Cards

You can also render cards on a fluid grid inside a dashboard.

```jsx
import { Dashboard } from '@kata-kit/dashboard';
import { Card } from '@kata-kit/card';

const Component = () => (
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
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Card>
    <Card title="Third Card">
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged.
    </Card>
  </DashboardCards>
);
```
