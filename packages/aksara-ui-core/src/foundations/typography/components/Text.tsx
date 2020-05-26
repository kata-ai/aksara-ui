import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { TextScale } from '../../../Theme';

import { typographyBase, TypographyBaseProps, shouldForwardTextProp } from '../utils';

export interface TextProps extends TypographyBaseProps {
  /** Size value of the text. */
  scale?: TextScale;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Text = styled('span').withConfig<TextProps>({
  shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
})`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.text',
    variants: {
      500: {},
      400: {},
      300: {},
      200: {},
    },
  })}

  ${typographyBase}
`;

Text.defaultProps = {
  scale: 400,
};

Text.displayName = 'Text';

export default Text;
