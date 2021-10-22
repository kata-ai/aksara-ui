import {
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  EmotionLabel,
  SystemCssProperties,
  VariantProperty,
} from '@styled-system/css';
import { RequiredTheme } from 'styled-system';
import { AllSystemProps, PseudoSystemProps } from '../system';

export type CSSObject =
  | AllSystemProps
  | PseudoSystemProps
  | SystemCssProperties
  | CSSPseudoSelectorProps
  | CSSSelectorObject
  | VariantProperty
  | EmotionLabel
  | Record<string, any>; // fallback handler, type variable css

export type ComponentThemeScaleFn<P> = (props: P & { theme: RequiredTheme }) => CSSObject;

// FIXME was SystemStyleObject
export type ComponentThemeScale<P> = CSSObject | ComponentThemeScaleFn<P>;

export type ComponentThemeConfig<Props = Record<string, any>> = {
  propToScaleMap?: Array<[string, string]>;
  baseStyle?: ComponentThemeScale<Props>;
  scales?: {
    [scale: string]: {
      [key: string]: ComponentThemeScale<Props> | undefined;
    };
  };
};
