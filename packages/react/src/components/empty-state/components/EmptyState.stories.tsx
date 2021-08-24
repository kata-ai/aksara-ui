import * as React from 'react';

import { Paragraph, Anchor } from '../../../layout';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import EmptyState from './EmptyState';

export default {
  title: 'Core/Components/Empty State',
  component: EmptyState,
};

export const PageLevel = () => (
  <EmptyState
    image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
    title="Let's train your model"
    variant="page"
    content={
      <Paragraph scale={400} color="grey07">
        Train new data to improve your natural language models. <Anchor href="#">Learn more</Anchor>
      </Paragraph>
    }
    actions={
      <ButtonGroup>
        <Button variant="primary">Train my data</Button>
        <Button>Upload data</Button>
      </ButtonGroup>
    }
  />
);

export const SectionLevel = () => (
  <EmptyState
    image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
    title="Let's train your model"
    variant="section"
    content={
      <Paragraph scale={300} color="grey07">
        Train new data to improve your natural language models. <Anchor href="#">Learn more</Anchor>
      </Paragraph>
    }
    actions={
      <ButtonGroup>
        <Button variant="primary">Train my data</Button>
        <Button>Upload data</Button>
      </ButtonGroup>
    }
  />
);

export const InnerLevel = () => (
  <EmptyState
    variant="inner"
    title="Let's train your model"
    image={<img src="https://via.placeholder.com/120x120.png" alt="Create a model" />}
    content={
      <Paragraph scale={300} color="grey07">
        Train new data to improve your natural language models. <Anchor href="#">Learn more</Anchor>
      </Paragraph>
    }
    actions={
      <ButtonGroup>
        <Button variant="primary">Train my data</Button>
        <Button>Upload data</Button>
      </ButtonGroup>
    }
  />
);
