import * as React from 'react';

import { Paragraph, Anchor } from '../../../layout';
import Blankslate from './Blankslate';

export default {
  title: 'Core/Components/Blankslate',
  component: Blankslate,
};

export const PageLevel = () => (
  <Blankslate
    image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
    title="Create a model"
    variant="page"
    content={
      <Paragraph color="grey07">
        Perform specific text analysis tasks, like detecting topics, extracting specific words, and more.{' '}
        <Anchor href="#">Learn more</Anchor>
      </Paragraph>
    }
  />
);

export const SectionLevel = () => (
  <Blankslate
    image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
    title="Create a model"
    variant="section"
    content={
      <Paragraph scale={300} color="grey07">
        Perform specific text analysis tasks, like detecting topics, extracting specific words, and more.{' '}
        <Anchor href="#">Learn more</Anchor>
      </Paragraph>
    }
  />
);

export const InnerLevel = () => (
  <Blankslate
    variant="inner"
    image={<img src="https://via.placeholder.com/120x120.png" alt="Create a model" />}
    content="No data yet."
  />
);
