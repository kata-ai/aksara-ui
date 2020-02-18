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
import { Heading } from '@aksara/ui-kit';

export default function Component() {
  return <Heading scale={500}>We are making AI technology accessible to everyone</Heading>;
}
```

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
      <Heading scale={100}>We are making AI technology accessible to everyone</Heading>
    </AksaraReset>
  );
}
```

Heading renders a `h2` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<AksaraReset>
  <Heading as="h3">We are making AI technology accessible to everyone</Heading>
</AksaraReset>
```

### `Text` component

The text component is used for single line text.

```jsx
import { AksaraReset, Text } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Text scale={500}>We are making AI technology accessible to everyone</Text>
      <Text scale={400}>We are making AI technology accessible to everyone</Text>
      <Text scale={300}>We are making AI technology accessible to everyone</Text>
      <Text scale={200}>We are making AI technology accessible to everyone</Text>
    </AksaraReset>
  );
}
```

Text renders a `span` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
import { AksaraReset, Text } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Text scale={400} as="p">
        We are making AI technology accessible to everyone
      </Text>
    </AksaraReset>
  );
}
```

### `Paragraph` component

Similar to `text`, but with `<p>` as the default element and has a font weight of `300`.

```jsx
import { Paragraph } from '@wicara/core';

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
import { Paragraph } from '@wicara/core';

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
