# Breadcrumb

> A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.

[WAI-ARIA Authoring Practices 1.1 - Section 3.4: Breadcrumb](https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb)

## Usage

To use this component within your app, import as follows:

```jsx
import { Breadcrumb, BreadcrumbItem } from '@aksara-ui/react';

export default function BasicExample() {
  return (
    <Breadcrumb
      items={[
        <BreadcrumbItem href="/">Home</BreadcrumbItem>,
        <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
        <BreadcrumbItem href="/item-2">Item 2</BreadcrumbItem>,
      ]}
    />
  );
}
```

### Custom separators

By default, breadcrumbs use the slash character (`/`) as the separator. However, if you want to include a custom SVG icon as a separator, you can use the `separator` prop.

```jsx
import { IconChevronRight } from '@aksara-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@aksara-ui/react';

export default function BasicExample() {
  return (
    <Breadcrumb
      items={[
        <BreadcrumbItem href="/">Home</BreadcrumbItem>,
        <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
        <BreadcrumbItem href="/item-2">Item 2</BreadcrumbItem>,
      ]}
      separator={IconChevronRight}
    />
  );
}
```
