import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { baseFonts } from '../utils/styles';

const headingStyles = {
  color: variables.colors.gray80,
  marginBottom: '0.5rem'
};

export function H1(props: any) {
  const style = {
    ...baseFonts,
    ...headingStyles,
    paddingBottom: variables.spacing.spacingXs,
    borderBottom: `1px solid ${variables.colors.gray30}`,
    fontSize: variables.fontSizes.peta,
    lineHeights: variables.fontSizes.peta
  };

  return <h1 style={style}>{props.children}</h1>;
}

export function H2(props: any) {
  const style = {
    ...baseFonts,
    ...headingStyles,
    paddingBottom: variables.spacing.spacingXs,
    borderBottom: `1px solid ${variables.colors.gray30}`,
    fontSize: variables.fontSizes.tera,
    lineHeight: variables.fontSizes.tera
  };

  return <h2 style={style}>{props.children}</h2>;
}

export function H3(props: any) {
  const style = {
    ...baseFonts,
    ...headingStyles,
    paddingBottom: variables.spacing.spacingXs,
    borderBottom: `1px solid ${variables.colors.gray30}`,
    fontSize: variables.fontSizes.giga,
    lineHeight: variables.fontSizes.giga
  };

  return <h3 style={style}>{props.children}</h3>;
}

export function H4(props: any) {
  const style = {
    ...baseFonts,
    ...headingStyles,
    fontSize: variables.fontSizes.mega,
    lineHeight: variables.fontSizes.mega
  };

  return <h4 style={style}>{props.children}</h4>;
}

export function H5(props: any) {
  const style = {
    ...baseFonts,
    ...headingStyles,
    fontSize: variables.fontSizes.kilo,
    lineHeight: variables.fontSizes.kilo
  };

  return <h5 style={style}>{props.children}</h5>;
}

export function H6(props: any) {
  const style = {
    ...baseFonts,
    ...headingStyles,
    fontSize: variables.fontSizes.kilo,
    lineHeight: variables.fontSizes.kilo
  };

  return <h6 style={style}>{props.children}</h6>;
}

export function P(props: any) {
  const style = {
    ...baseFonts,
    fontSize: variables.fontSizes.kilo,
    lineHeights: variables.fontSizes.kilo,
    marginBottom: '1rem'
  };

  // <P> is oftentimes used as a parent element of
  // <a> and <pre> elements, which is why <div>
  // is used as the outputted element when parsing
  // marksy content rather than <p>.
  return <div style={style}>{props.children}</div>;
}
