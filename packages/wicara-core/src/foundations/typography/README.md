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
      <Heading scale={900}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={800}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={700}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={600}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={500}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={400}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={300}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={200}>We are making AI technology accessible to everyone</Heading>
    </AksaraReset>
  );
}
```

Heading renders a `h2` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<AksaraReset>
  <Heading scale={700} as="h3">
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
      <Text scale={400}>We are making AI technology accessible to everyone</Text>
      <Text scale={300}>We are making AI technology accessible to everyone</Text>
      <Text scale={200}>We are making AI technology accessible to everyone</Text>
    </AksaraReset>
  );
}
```

Text renders a `span` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<AksaraReset>
  <Text scale={300} as="p">
    We are making AI technology accessible to everyone
  </Heading>
</AksaraReset>
```

### `Paragraph` component

[TODO]
