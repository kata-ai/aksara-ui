# Typography

Typography primitives for Aksara UI Kit.

## Usage

All typography components contain the following styled-system hooks:

- layout
- space
- color
- typography

Read the [`styled-system` reference table](https://styled-system.com/table) for more information about these hooks and how they work.

### Scale props

We also provided a special `scale` prop on all components to automatically scale fonts based on their respective type scales.

```jsx
import { Heading } from '@aksara-ui/react';

export default function Component() {
  return <Heading scale={500}>We are making AI technology accessible to everyone</Heading>;
}
```

### `Heading` component

The heading component is used for all headings.

```jsx
import { Box, Heading } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <Box>
      <Heading scale={900}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={800}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={700}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={600}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={500}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={400}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={300}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={200}>We are making AI technology accessible to everyone</Heading>
      <Heading scale={100}>We are making AI technology accessible to everyone</Heading>
    </Box>
  );
}
```

Heading renders a `h2` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<Heading as="h3">We are making AI technology accessible to everyone</Heading>
```

### `Text` component

The text component is used for single line text.

```jsx
import { Box, Text } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <Box>
      <Text scale={500}>We are making AI technology accessible to everyone</Text>
      <Text scale={400}>We are making AI technology accessible to everyone</Text>
      <Text scale={300}>We are making AI technology accessible to everyone</Text>
      <Text scale={200}>We are making AI technology accessible to everyone</Text>
    </Box>
  );
}
```

Text renders a `span` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
import { Text } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <Text scale={400} as="p">
      We are making AI technology accessible to everyone
    </Text>
  );
}
```

### `Paragraph` component

Similar to `text`, but with `<p>` as the default element and has a font weight of `300`.

```jsx
import { Paragraph } from '@aksara-ui/react';

export default function Component() {
  return (
    <Paragraph>
      We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
      conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
      Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
      Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and Retail.
    </Paragraph>
  );
}
```

As with all other components, you can use the `scale` prop to use different type scales for the paragraph. For example:

```jsx
import { Paragraph } from '@aksara-ui/react';

export default function Component() {
  return (
    <Paragraph scale={300}>
      We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
      conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
      Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
      Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and Retail.
    </Paragraph>
  );
}
```

### `Anchor` component

The anchor component is used to render a link.

```jsx
import { Anchor } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return <Anchor href="https://www.youtube.com/watch?v=P_mQpbCSQOo">Visit this nice link!</Anchor>;
}
```

### `UnstyledAnchor` component

This is basically an `Anchor` component with all styling elements removed (incl. hover/focus effects).

```jsx
import { UnstyledAnchor } from '@aksara-ui/react';

export default function Component({ children }) {
  return <UnstyledAnchor>I'm an unstyled link!</UnstyledAnchor>;
}
```
