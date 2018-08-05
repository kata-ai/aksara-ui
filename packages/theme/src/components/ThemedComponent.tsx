import React from 'react';
import { ThemeAttributes } from '../types';

interface ThemedComponentRenderProps {
  props?: string;
  theme: ThemeAttributes;
}

interface ThemedComponentProps extends ThemedComponentRenderProps {
  children: RenderCallback;
}

type RenderCallback = (props: ThemedComponentRenderProps) => JSX.Element;

const ThemedComponent: React.SFC<ThemedComponentProps> = ({
  children,
  props,
  theme
}: ThemedComponentProps) => {
  return children({ props, theme });
};

export default ThemedComponent;
