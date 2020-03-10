import * as React from 'react';
import { BoxProps } from '../../../../foundations';
import InputElement, { InputElementBaseProps } from './InputElement';

type InputElementProps = InputElementBaseProps & BoxProps;

const InputLeftElement = React.forwardRef<HTMLDivElement, InputElementProps>((props, ref) => (
  <InputElement ref={ref} placement="left" {...props} />
));

InputLeftElement.displayName = 'InputLeftElement';

export default InputLeftElement;
