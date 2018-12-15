# @kata-kit/layout

> Layout components for kata-kit.

## Install

`@kata-kit/layout` requires `react-router`. To install, use:

```sh
# yarn
yarn add @kata-kit/layout react-router-dom
# npm
npm install @kata-kit/layout react-router-dom
```

## Usage

To use this component within your React app, import as follows:

```jsx
import {
  Wrapper,
  Content,
  Sidebar,
  SidebarMain,
  SidebarMainMenu,
  SidebarSub,
  SidebarSubMenu
} from '@kata-kit/layout';

const Component = ({ children }) => (
  <Wrapper>
    <Sidebar collapsed={this.isSidebarCollapsed()}>
      <SidebarMain logo={Logo}>
        <SidebarMainMenu exact to="/" icon="bot">
          Demo
        </SidebarMainMenu>
        <SidebarMainMenu to="/docs" icon="docs">
          Docs
        </SidebarMainMenu>
        <SidebarMainMenu to="/components" icon="method">
          Components
        </SidebarMainMenu>
      </SidebarMain>
      <SidebarSub titleElement={<SidebarSubTitle>Docs</SidebarSubTitle>}>
        <SidebarSubMenu exact to="/docs">
          Index
        </SidebarSubMenu>
        <SidebarSubMenu exact to="/docs/page">
          Page
        </SidebarSubMenu>
      </SidebarSub>
    </Sidebar>
    <Content>{children}</Content>
  </Wrapper>
);
```
