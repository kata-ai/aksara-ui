import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '../../../../.storybook/components/Wrapper';

const StoryWrapper: StoryDecorator = storyFn => <RootWrapper>{storyFn()}</RootWrapper>;

storiesOf('Components|Foundations/Reset', module)
  .addDecorator(StoryWrapper)
  .add('headings', () => (
    <div>
      <h1>h1. Heading</h1>
      <h2>h2. Heading</h2>
      <h3>h3. Heading</h3>
      <h4>h4. Heading</h4>
      <h5>h5. Heading</h5>
      <h6>h6. Heading</h6>
    </div>
  ))
  .add('text helper classes', () => (
    <div>
      <h4 className="subtitle">h4. Heading with subtitle</h4>
      <h5 className="text-label">h5. Heading with text-label</h5>
      <h6 className="text-small">h6. Heading with text-small</h6>
    </div>
  ))
  .add('body and links', () => (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a <strong>type specimen book</strong>. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <p>
        Text with a link will{' '}
        <a href="https://www.youtube.com/watch?v=BVggF2TxSu8" target="_blank">
          look like this
        </a>
        .
      </p>
    </div>
  ));
