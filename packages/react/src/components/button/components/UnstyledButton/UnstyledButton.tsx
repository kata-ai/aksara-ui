import styled from 'styled-components';
import {
  allSystemProps,
  AllSystemProps,
  pseudoSystemProps,
  PseudoSystemProps,
  shouldForwardProp,
  sxMixin,
  SxProps,
  componentStylesMixin,
} from '../../../../system';

export interface UnstyledButtonProps extends AllSystemProps, PseudoSystemProps, SxProps {
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

/** A button element with all styling elements removed (incl. hover/focus effects). */
const UnstyledButton = styled('button').withConfig<UnstyledButtonProps>({ shouldForwardProp })(
  componentStylesMixin('unstyledButton'),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

UnstyledButton.displayName = 'UnstyledButton';

export default UnstyledButton;
