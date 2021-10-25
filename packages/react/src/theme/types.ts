import { SystemStyleObject } from '@styled-system/css';
import { RequiredTheme } from 'styled-system';
import { AllSystemProps, PseudoSystemProps } from '../system/props';

export type CSSObject = AllSystemProps | PseudoSystemProps | SystemStyleObject | Record<string, any>; // fallback handler, type variable css

export type ComponentThemeScaleFn<P = Record<string, any>> = (props: P & { theme: RequiredTheme }) => CSSObject;

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
