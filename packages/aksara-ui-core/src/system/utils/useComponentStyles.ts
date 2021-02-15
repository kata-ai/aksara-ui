/* eslint-disable @typescript-eslint/ban-types */

import { get } from 'styled-system';
import { css } from '@styled-system/css';
import deepmerge from 'deepmerge';
import * as React from 'react';
import isEqual from 'react-fast-compare';
import { useTheme } from 'styled-components';
import { runIfFn } from '../../utils';
import { ComponentThemeConfig } from '../../theme';

function getStyles(config?: ComponentThemeConfig, props: any = {}) {
  if (config) {
    const propToScaleMap: string[][] = config.propToScaleMap ?? [];

    const baseStyles = config.baseStyle ? runIfFn(config.baseStyle, props) : {};

    const scaleStyles = propToScaleMap
      .map(([prop, scale]) =>
        config.scales && props[prop] ? runIfFn(config.scales[scale]?.[props[prop]], props) : undefined
      )
      .filter(style => !!style) as object[];

    return deepmerge.all([baseStyles, ...scaleStyles, props.sx ?? {}]);
  }

  return {};
}

/**
 * Hook for resolving a component's styles.
 */
export function useComponentStyles(componentKey: string, props: any = {}) {
  const theme = useTheme();
  const config = get(theme, `componentStyles.${componentKey}`);

  const allProps = React.useMemo(() => {
    const { children, ...rest } = props;
    return deepmerge.all([{ theme }, rest]);
  }, [props, theme]);

  const stylesRef = React.useRef({});

  return React.useMemo(() => {
    const styles = getStyles(config, allProps);

    if (!isEqual(stylesRef.current, styles)) {
      stylesRef.current = styles;
    }

    return stylesRef.current;
  }, [allProps, config]);
}

/**
 * Parser for resolving a component's styles.
 */
export function getComponentStyles(componentKey: string) {
  return (props: any): any => {
    const { children, theme, ...rest } = props;

    const config = get(theme, `componentStyles.${componentKey}`);
    const allProps = deepmerge.all([{ theme }, rest]);

    const styles: any = getStyles(config, allProps);

    return css(styles)(props);
  };
}
