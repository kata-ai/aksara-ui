import * as React from 'react';
import { BoxProps } from '../../../../layout';
import InputElement, { InputElementBaseProps } from './InputElement';

type InputElementProps = InputElementBaseProps & BoxProps;

const InputRightElement = React.forwardRef<HTMLDivElement, InputElementProps>((props, ref) => (
  <InputElement ref={ref} placement="right" {...props} />
));

InputRightElement.displayName = 'InputRightElement';

export default InputRightElement;
