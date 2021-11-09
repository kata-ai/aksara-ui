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
} from '../../../system';

export interface UnstyledAnchorProps extends AllSystemProps, PseudoSystemProps, SxProps {
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

/** An anchor element with all styling elements removed (incl. hover/focus effects). */
const UnstyledAnchor = styled('a').withConfig<UnstyledAnchorProps>({ shouldForwardProp })(
  componentStylesMixin('unstyledAnchor'),
  allSystemProps,
  pseudoSystemProps,
  sxMixin
);

UnstyledAnchor.displayName = 'UnstyledAnchor';

export default UnstyledAnchor;
