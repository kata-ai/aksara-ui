import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Button } from '../Button';

const stories = storiesOf('Button', module).addDecorator(story => <Wrapper>{story()}</Wrapper>);

stories.add('basic example', () => <Button loading>I'm a button!</Button>);

const Wrapper = styled('div')`
  padding: 1rem;
`;
