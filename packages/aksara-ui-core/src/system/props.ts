/* eslint-disable no-underscore-dangle */
import css, { CssFunctionReturnType } from '@styled-system/css';
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import {
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  compose,
} from 'styled-system';

import { other, otherProps, OtherProps, typography, typographyProps, TypographyProps } from './parsers';

const allProps = [...props, ...typographyProps, ...otherProps];

export function sfp(p: string[] = []) {
  return createShouldForwardProp([...allProps, ...p]);
}

export const shouldForwardProp = createShouldForwardProp(allProps);

export type AllSystemProps = LayoutProps &
  FlexboxProps &
  PositionProps &
  GridProps &
  SpaceProps &
  BackgroundProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  TypographyProps &
  OtherProps;

export const allSystemProps = compose(
  layout,
  flexbox,
  position,
  grid,
  space,
  background,
  color,
  border,
  shadow,
  typography,
  other
);

export const pseudoSelectors = {
  _hover: '&:hover, &[data-hover]',
  _active: '&:active, &[data-active]',
  _focus: '&:focus, &[data-focus]',
  _highlighted: '&[data-highlighted]',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
  _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
  _before: '&::before',
  _after: '&::after',
  _empty: '&::empty',
  _expanded: '&[aria-expanded=true], &[data-expanded]',
  _checked: '&[aria-checked=true], &[data-checked]',
  _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
  _pressed: '&[aria-pressed=true], &[data-pressed]',
  _invalid: '&[aria-invalid=true], &[data-invalid]',
  _valid: '&[data-valid], &[data-state=valid]',
  _loading: '&[data-loading], &[aria-busy=true]',
  _selected: '&[aria-selected=true], &[data-selected]',
  _hidden: '&[hidden], &[data-hidden]',
  _autofill: '&:-webkit-autofill',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _visited: '&:visited',
  _activeLink: '&[aria-current=page]',
  _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
  _groupHover: '&[role=group]:hover &, &[role=group][data-hover] &',
  _groupFocus: '&[role=group]:focus &, &[role=group][data-focus] &',
  _groupActive: '&[role=group]:active &, &[role=group][data-active] &',
  _groupDisabled: '&[role=group]:disabled &, [role=group][data-disabled] &',
  _groupInvalid: '&[role=group][data-invalid] &',
  _groupChecked: '&[role=group][data-checked] &',
  _placeholder: '&::placeholder',
  _fullScreen: '&:fullscreen',
  _selection: '&::selection',
};

export type PseudoSystemProps = Partial<Record<keyof typeof pseudoSelectors, AllSystemProps>>;

export function pseudoSystemProps({
  _hover,
  _active,
  _focus,
  _highlighted,
  _focusWithin,
  _focusVisible,
  _disabled,
  _readOnly,
  _before,
  _after,
  _empty,
  _expanded,
  _checked,
  _grabbed,
  _pressed,
  _invalid,
  _valid,
  _loading,
  _selected,
  _hidden,
  _autofill,
  _even,
  _odd,
  _first,
  _last,
  _notFirst,
  _notLast,
  _visited,
  _activeLink,
  _indeterminate,
  _groupHover,
  _groupFocus,
  _groupActive,
  _groupDisabled,
  _groupInvalid,
  _groupChecked,
  _placeholder,
  _fullScreen,
  _selection,
}: PseudoSystemProps) {
  return css({
    [pseudoSelectors._hover]: _hover,
    [pseudoSelectors._active]: _active,
    [pseudoSelectors._focus]: _focus,
    [pseudoSelectors._highlighted]: _highlighted,
    [pseudoSelectors._focusWithin]: _focusWithin,
    [pseudoSelectors._focusVisible]: _focusVisible,
    [pseudoSelectors._disabled]: _disabled,
    [pseudoSelectors._readOnly]: _readOnly,
    [pseudoSelectors._before]: _before,
    [pseudoSelectors._after]: _after,
    [pseudoSelectors._empty]: _empty,
    [pseudoSelectors._expanded]: _expanded,
    [pseudoSelectors._checked]: _checked,
    [pseudoSelectors._grabbed]: _grabbed,
    [pseudoSelectors._pressed]: _pressed,
    [pseudoSelectors._invalid]: _invalid,
    [pseudoSelectors._valid]: _valid,
    [pseudoSelectors._loading]: _loading,
    [pseudoSelectors._selected]: _selected,
    [pseudoSelectors._hidden]: _hidden,
    [pseudoSelectors._autofill]: _autofill,
    [pseudoSelectors._even]: _even,
    [pseudoSelectors._odd]: _odd,
    [pseudoSelectors._first]: _first,
    [pseudoSelectors._last]: _last,
    [pseudoSelectors._notFirst]: _notFirst,
    [pseudoSelectors._notLast]: _notLast,
    [pseudoSelectors._visited]: _visited,
    [pseudoSelectors._activeLink]: _activeLink,
    [pseudoSelectors._indeterminate]: _indeterminate,
    [pseudoSelectors._groupHover]: _groupHover,
    [pseudoSelectors._groupFocus]: _groupFocus,
    [pseudoSelectors._groupActive]: _groupActive,
    [pseudoSelectors._groupDisabled]: _groupDisabled,
    [pseudoSelectors._groupInvalid]: _groupInvalid,
    [pseudoSelectors._groupChecked]: _groupChecked,
    [pseudoSelectors._placeholder]: _placeholder,
    [pseudoSelectors._fullScreen]: _fullScreen,
    [pseudoSelectors._selection]: _selection,
  });
}

export interface SxProps {
  sx?: Partial<Record<keyof AllSystemProps & PseudoSystemProps, any>>;
}

export function sxMixin(p: SxProps): CssFunctionReturnType | Record<string, never> {
  return p.sx ? css(p.sx) : {};
}
