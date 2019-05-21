# Typography

Typography primitives for Aksara UI Kit.

## Usage

### `Heading` component

The heading component is used for all headings.

```jsx
import { AksaraReset, Heading } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Heading size={200}>We are making AI technology accessible to everyone</Heading>
      <Heading size={300}>We are making AI technology accessible to everyone</Heading>
      <Heading size={400}>We are making AI technology accessible to everyone</Heading>
      <Heading size={500}>We are making AI technology accessible to everyone</Heading>
      <Heading size={600}>We are making AI technology accessible to everyone</Heading>
      <Heading size={700}>We are making AI technology accessible to everyone</Heading>
      <Heading size={800}>We are making AI technology accessible to everyone</Heading>
      <Heading size={900}>We are making AI technology accessible to everyone</Heading>
    </AksaraReset>
  );
}
```

Heading renders a `h2` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<AksaraReset>
  <Heading size={700} as="h3">
    We are making AI technology accessible to everyone
  </Heading>
</AksaraReset>
```

### `Text` component

The text component is used for single line text.

```jsx
import { AksaraReset, Text } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Text size={200}>We are making AI technology accessible to everyone</Text>
      <Text size={300}>We are making AI technology accessible to everyone</Text>
      <Text size={400}>We are making AI technology accessible to everyone</Text>
    </AksaraReset>
  );
}
```

Text renders a `span` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<AksaraReset>
  <Text size={300} as="p">
    We are making AI technology accessible to everyone
  </Heading>
</AksaraReset>
```

### `Paragraph` component

[TODO]
