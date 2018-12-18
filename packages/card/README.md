# @kata-kit/card

> Card component for kata-kit.

## Install

```sh
# yarn
yarn add @kata-kit/card
# npm
npm install @kata-kit/card
```

## Usage

To use this component within your React app, import as follows:

```javascript
import { CardGrid, Card } from '@kata-kit/card';

const Component = () => (
  <React.Fragment>
    <Card title="First Card">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Card>
    <Card title="Second Card">
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Card>
    <Card
      title="Card With Action"
      action={
        <Button color="secondary" isIcon>
          <i className="icon-more" />
        </Button>
      }
    >
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged.
    </Card>
  </React.Fragment>
);
```
