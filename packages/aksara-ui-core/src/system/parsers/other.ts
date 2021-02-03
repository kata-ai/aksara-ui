import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

export interface OtherProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The `appearance` CSS property is used to display an element using platform-native styling,
   * based on the operating system's theme.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
   */
  appearance?: ResponsiveValue<CSS.Property.Appearance, ThemeType>;
  /**
   * The `visibility` CSS property shows or hides an element without changing the layout of a document.
   * The property can also hide rows or columns in a <table>.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
   */
  visibility?: ResponsiveValue<CSS.Property.Visibility, ThemeType>;
  /**
   * The `white-space` CSS property sets how white space inside an element is handled.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
   */
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType>;
  /**
   * The `user-select` CSS property controls whether the user can select text. This doesn't have any
   * effect on content loaded as chrome, except in textboxes.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
   */
  userSelect?: ResponsiveValue<CSS.Property.UserSelect, ThemeType>;
  /**
   * The `pointer-events` CSS property sets under what circumstances (if any) a particular graphic
   * element can become the target of pointer events.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
   */
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents, ThemeType>;
  /**
   * The `word-break` CSS property sets whether line breaks appear wherever the text would otherwise
   * overflow its content box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
   */
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak, ThemeType>;
  /**
   * The `overflow-wrap` CSS property applies to inline elements, setting whether the browser should insert
   * line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
   */
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap, ThemeType>;
  /**
   * The `box-sizing` CSS property sets how the total width and height of an element is calculated.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
   */
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing, ThemeType>;
  /**
   * The `cursor` CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is
   * over an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
   */
  cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  /**
   * The `resize` CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
   */
  resize?: ResponsiveValue<CSS.Property.Resize, ThemeType>;
  /**
   * The `object-fit` CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`,
   * should be resized to fit its container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   */
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit, ThemeType>;
  /**
   * The `object-position` CSS property specifies the alignment of the selected replaced element's
   * contents within the element's box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
   */
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition, ThemeType>;
  /**
   * The `float` CSS property places an element on the left or right side of its container, allowing
   * text and inline elements to wrap around it.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
   */
  float?: ResponsiveValue<CSS.Property.Float, ThemeType>;
  /**
   * The `fill` attribute has two different meanings. For shapes and text it's a presentation attribute that
   * defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for
   * animation it defines the final state of the animation.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/fill)
   */
  fill?: ResponsiveValue<CSS.Property.Fill, ThemeType>;
  /**
   * The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients
   * or patterns) used to paint the outline of the shape.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke)
   */
  stroke?: ResponsiveValue<CSS.Property.Stroke, ThemeType>;
  /**
   * The outline CSS shorthand property set all the outline properties in a single declaration.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
   */
  outline?: ResponsiveValue<CSS.Property.Outline, ThemeType>;
}

const config: Config = {
  appearance: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  fill: true,
  stroke: true,
  outline: true,
};

export const other = system(config);

export const otherProps = [
  'appearance',
  'visibility',
  'whiteSpace',
  'userSelect',
  'pointerEvents',
  'wordBreak',
  'overflowWrap',
  'boxSizing',
  'cursor',
  'resize',
  'objectFit',
  'objectPosition',
  'float',
  'fill',
  'stroke',
  'outline',
];
