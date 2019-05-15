import { themeProps, FontSizes } from '../../Theme';
import { TypographyProps } from './StyledText';

/**
 * Returns the.
 *
 * @param textType Either `text` or `heading`.
 * @param size The size key.
 */
export function determineFontDimensions(textType: keyof FontSizes, size: number = 400): TypographyProps {
  const match = themeProps.fontSizes[textType][size];

  if (textType === 'heading') {
    return {
      fontSize: `${match.fontSize}px`,
      lineHeight: `${match.lineHeight}px`,
      fontWeight: size <= 400 ? 600 : 400
    };
  }

  return {
    fontSize: `${match.fontSize}px`,
    lineHeight: `${match.lineHeight}px`,
    fontWeight: 400
  };
}
