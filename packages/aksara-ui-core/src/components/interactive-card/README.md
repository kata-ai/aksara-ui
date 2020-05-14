# InteractiveCard

> Card are used to apply a container around a related grouping of information.

Interactive card has action such as open and view in more detail that simply occur by clicking the card. The card doesn’t include button but clicking anywhere on the card should perform that action. The whole card should be clickable.

## Usage

To use this component in your app, import as follows:

```tsx
export default function Component() {
  return (
    <InteractiveCard>
      <Box p="lg">
        <Heading scale={400}>Deno</Heading>
      </Box>
      <Box p="lg" pt={0}>
        <Text scale={200} color="grey07">
          A secure runtime for JavaScript and TypeScript
        </Text>
      </Box>
    </InteractiveCard>
  );
}
```

### Props

| Property | Type            | Required | Default   | Description                                     |
| -------- | --------------- | -------- | --------- | ----------------------------------------------- |
| actions  | React.ReactNode | -        | undefined | Additional action buttons that appear on hover. |
| image    | string          | -        | undefined | Any image to add to the card.                   |
| imageAlt | string          | -        | undefined | Alt text to the card image.                     |
