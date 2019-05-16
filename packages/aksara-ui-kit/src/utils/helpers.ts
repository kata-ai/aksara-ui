import { Color, themeProps, Space } from '../Theme';

export const getColor = (colorKey: Color) => themeProps.colors[colorKey];

export const getSpacing = (spaceKey: Space) => themeProps.space[spaceKey];
