import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// import Circle from '../Circle';
import Robot from '../Robot';
import InfiniteScrollSpinner from '../InfiniteScrollSpinner';

const stories = storiesOf('Loading', module).addDecorator(story => <Wrapper>{story()}</Wrapper>);

/* stories.add('Circle', () => <Circle />); */

stories.add('Robot', () => <Robot />);

stories.add('InfiniteScrollSpinner', () => (
  <div>
    <h4>Normal size</h4>
    <InfiniteScrollSpinner />
    <InfiniteScrollSpinner bsStyle="primary" />
    <InfiniteScrollSpinner bsStyle="gray" />
    <InfiniteScrollSpinner bsStyle="white" />

    <h4>Small size</h4>
    <InfiniteScrollSpinner sm />
    <InfiniteScrollSpinner sm bsStyle="primary" />
    <InfiniteScrollSpinner sm bsStyle="gray" />
    <InfiniteScrollSpinner sm bsStyle="white" />

    <h4>Large size</h4>
    <InfiniteScrollSpinner lg />
    <InfiniteScrollSpinner lg bsStyle="primary" />
    <InfiniteScrollSpinner lg bsStyle="gray" />
    <InfiniteScrollSpinner lg bsStyle="white" />
  </div>
));

const Wrapper = styled('div')`
  padding: 1rem;
`;
