import { themeProps, TypeScale } from '../../../Theme';

/**
 * Determines font sizes based on the text type and size index.
 *
 * @param scale The size key.
 */
export function determineFontDimensions(scale: TypeScale) {
  const match = themeProps.typeScale[scale];

  return {
    fontSize: `${match.fontSize}px`,
    lineHeight: `${match.lineHeight}px`
  };
}
