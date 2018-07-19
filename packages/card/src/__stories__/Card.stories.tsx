import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Card from '../Card';
import CardGrid from '../CardGrid';

const stories = storiesOf('Card', module).addDecorator(story => <Wrapper>{story()}</Wrapper>);

stories.add('basic example', () => (
  <CardGrid>
    <Card>
      <p>I'm a card!</p>
    </Card>
    <Card>
      <p>I'm another card!</p>
    </Card>
    <Card>
      <p>There's too many cards!</p>
    </Card>
  </CardGrid>
));

stories.add('with title', () => (
  <CardGrid>
    <Card title="First Simple Card">
      <p>I'm a card!</p>
    </Card>
    <Card title="Second Simple Card">
      <p>I'm another card!</p>
    </Card>
    <Card title="Third Simple Card">
      <p>There's too many cards!</p>
    </Card>
  </CardGrid>
));

stories.add('with action', () => (
  <CardGrid>
    <Card
      title="Card With Action"
      action={
        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          icon
        </button>
      }
    >
      <p>I'm a card!</p>
    </Card>
  </CardGrid>
));

const Wrapper = styled('div')`
  padding: 1rem;
`;
