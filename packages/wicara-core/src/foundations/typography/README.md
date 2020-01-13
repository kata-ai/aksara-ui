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

We also provided a special `scale` prop on all components to automatically scale fonts based on their respective type scales. Available type scales are as follows:

- `heading1`
- `heading2`
- `heading3`
- `heading4`
- `heading5`
- `paragraph`
- `large`
- `body`
- `label`
- `small`

```jsx
import { Heading } from '@aksara/ui-kit';

export default function Component() {
  return <Heading scale="heading3">We are making AI technology accessible to everyone</Heading>;
}
```

### `Heading` component

The heading component is used for all headings.

```jsx
import { AksaraReset, Heading } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Heading scale="heading1">We are making AI technology accessible to everyone</Heading>
      <Heading scale="heading2">We are making AI technology accessible to everyone</Heading>
      <Heading scale="heading3">We are making AI technology accessible to everyone</Heading>
      <Heading scale="heading4">We are making AI technology accessible to everyone</Heading>
      <Heading scale="heading5">We are making AI technology accessible to everyone</Heading>
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
      <Text scale="large">We are making AI technology accessible to everyone</Text>
      <Text scale="body">We are making AI technology accessible to everyone</Text>
      <Text scale="label">We are making AI technology accessible to everyone</Text>
      <Text scale="small">We are making AI technology accessible to everyone</Text>
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
      <Text scale="paragraph" as="p">
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
      We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on
      understanding human conversation so we can improve the way humans collaborate with technology
      to be more productive and empowered. Kata.ai’s Natural Language Processing (NLP) technology
      powers multi-purpose chatbots for major corporations in Indonesia across different industries,
      including FMCG, Telecommunication, Banking & Financial Service, and Retail.
    </Paragraph>
  );
}
```

As with all other components, you can use the `scale` prop to use different type scales for the paragraph. For example:

```jsx
import { Paragraph } from '@wicara/core';

export default function Component() {
  return (
    <Paragraph scale="small">
      We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on
      understanding human conversation so we can improve the way humans collaborate with technology
      to be more productive and empowered. Kata.ai’s Natural Language Processing (NLP) technology
      powers multi-purpose chatbots for major corporations in Indonesia across different industries,
      including FMCG, Telecommunication, Banking & Financial Service, and Retail.
    </Paragraph>
  );
}
```
