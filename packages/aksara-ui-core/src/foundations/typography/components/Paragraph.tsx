import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { ParagraphScale } from '../../../Theme';

import { typographyBase, TypographyBaseProps, shouldForwardTextProp } from '../utils';

export interface ParagraphProps extends TypographyBaseProps {
  /** Size value of the text. */
  scale?: ParagraphScale;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
const Paragraph = styled('p').withConfig<ParagraphProps>({
  shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
})`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.paragraph',
    variants: {
      400: {},
      300: {},
    },
  })}

  ${typographyBase}
`;

Paragraph.defaultProps = {
  scale: 400,
  letterSpacing: '-0.05px',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
