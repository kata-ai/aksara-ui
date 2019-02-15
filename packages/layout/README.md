# @kata-kit/layout

> Layout components for Wicara.

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
  SidebarAndContent,
  Content,
  Sidebar,
  SidebarMain,
  SidebarMainMenu,
  SidebarSub,
  SidebarSubMenu
} from '@kata-kit/layout';

const Component = ({ children, isSidebarCollapsed }) => (
  <Wrapper>
    <SidebarAndContent>
      <Sidebar collapsed={isSidebarCollapsed}>
        <SidebarMain logo={Logo}>
          <SidebarMainMenu asNavLink exact to="/" icon="bot">
            Demo
          </SidebarMainMenu>
          <SidebarMainMenu asNavLink to="/docs" icon="docs">
            Docs
          </SidebarMainMenu>
          <SidebarMainMenu asNavLink to="/components" icon="method">
            Components
          </SidebarMainMenu>
        </SidebarMain>
        <SidebarSub titleElement={<SidebarSubTitle>Docs</SidebarSubTitle>}>
          <SidebarSubMenu asNavLink exact to="/docs">
            Index
          </SidebarSubMenu>
          <SidebarSubMenu asNavLink exact to="/docs/page">
            Page
          </SidebarSubMenu>
        </SidebarSub>
      </Sidebar>
      <Content>{children}</Content>
    </SidebarAndContent>
  </Wrapper>
);
```
