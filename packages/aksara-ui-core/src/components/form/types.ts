import * as React from 'react';
import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps } from 'styled-system';

export interface WithStylesProps {
  className?: string;
  style?: React.CSSProperties;
}

export type InputSizes = 40 | 48;

export interface InputBaseProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  /** True if this text input has an addon style */
  addon?: boolean;
  /** True if the input has errors. */
  inputVariant?: 'base' | 'errors';
  /** Form size */
  inputSize?: InputSizes;
}

export type CheckRadioBaseProps = Omit<InputBaseProps, 'inputSize' | 'addon'>;
