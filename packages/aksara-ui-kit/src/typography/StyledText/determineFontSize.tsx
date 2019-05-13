import { themeProps, FontSizes } from '../../Theme';

/**
 * Returns the.
 *
 * @param textType Either `text` or `heading`.
 * @param size The size key.
 */
export function determineFontSize(textType: keyof FontSizes, size: number) {
  const match = themeProps.fontSizes[textType][size];
  return {
    fontSize: `${match.fontSize}px`,
    lineHeight: `${match.lineHeight}px`
  };
}
