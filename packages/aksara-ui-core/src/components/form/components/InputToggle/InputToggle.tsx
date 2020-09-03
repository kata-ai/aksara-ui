import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import VisuallyHidden from '@reach/visually-hidden';

import { Box } from '../../../../foundations';
import { ToggleSizes, InputToggleInnerProps } from './types';
import { toggleButtonSizes } from './utils';

export interface InputToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  size?: ToggleSizes;
}

const Toggle = styled('span')<InputToggleInnerProps>`
  display: block;
  position: relative;
  width: ${props => props.inputSize.width}px;
  height: ${props => props.inputSize.height}px;
  background-color: ${themeGet('colors.grey04')};
  border-radius: ${props => props.inputSize.height}px;
  transition: background-color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: ${props => props.inputSize.switch}px;
    height: ${props => props.inputSize.switch}px;
    background: ${themeGet('colors.white')};
    border-radius: ${props => props.inputSize.switch}px;
    transition: 0.3s ease;
  }
`;

const Input = styled('input')<InputToggleInnerProps>`
  height: 100%;
  left: 0;
  opacity: 0.0001;
  position: absolute;
  top: 0;
  width: 100%;

  &:not([role='button']) {
    pointer-events: none;
  }

  &:focus + ${Toggle} {
    outline: 2px solid ${themeGet('colors.blue06')};
  }

  &:checked + ${Toggle} {
    background: ${themeGet('colors.green06')};
  }

  &:checked + ${Toggle}:after {
    left: ${props => props.inputSize.height + 2}px;
  }

  &:disabled + ${Toggle}, &.disabled + ${Toggle} {
    opacity: 0.4;
  }
`;

const InputToggle: React.RefForwardingComponent<HTMLInputElement, InputToggleProps> = (
  { id, className, style, size = 'md', label, ...rest },
  ref
) => {
  const inputSize = toggleButtonSizes(size);

  return (
    <Box
      as="label"
      htmlFor={id}
      className={className}
      style={style}
      display="inline-flex"
      position="relative"
      alignItems="center"
    >
      <Input id={id} type="checkbox" role="switch" inputSize={inputSize} ref={ref} {...rest} />
      <Toggle inputSize={inputSize} aria-hidden />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Box>
  );
};

export default React.forwardRef(InputToggle);
