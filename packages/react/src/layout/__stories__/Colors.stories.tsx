import * as React from 'react';
import { theme } from '../../theme';
import { ColorSwatch, ColorSwatchGrid } from '../../utils/storybook';

export default {
  title: 'Core/Foundations/Colors',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Primary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Glitter" colorKey="blue01" hex={theme.colors.blue01} />
    <ColorSwatch title="Aqua" colorKey="blue02" hex={theme.colors.blue02} />
    <ColorSwatch title="Jordy" colorKey="blue03" hex={theme.colors.blue03} />
    <ColorSwatch title="Jeans" colorKey="blue04" hex={theme.colors.blue04} />
    <ColorSwatch title="France" colorKey="blue05" hex={theme.colors.blue05} />
    <ColorSwatch title="Absolute" colorKey="blue06" hex={theme.colors.blue06} />
    <ColorSwatch title="Brandeis" colorKey="blue07" hex={theme.colors.blue07} />
    <ColorSwatch title="Usafa" colorKey="blue08" hex={theme.colors.blue08} />
    <ColorSwatch title="Midnight" colorKey="blue09" hex={theme.colors.blue09} />
    <ColorSwatch title="Maastricht" colorKey="blue10" hex={theme.colors.blue10} />
  </ColorSwatchGrid>
);

export const Secondary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Soap" colorKey="indigo01" hex={theme.colors.indigo01} />
    <ColorSwatch title="Steel" colorKey="indigo02" hex={theme.colors.indigo02} />
    <ColorSwatch title="Ceil" colorKey="indigo03" hex={theme.colors.indigo03} />
    <ColorSwatch title="Glaucous" colorKey="indigo04" hex={theme.colors.indigo04} />
    <ColorSwatch title="Pigment" colorKey="indigo05" hex={theme.colors.indigo05} />
    <ColorSwatch title="Imperial" colorKey="indigo06" hex={theme.colors.indigo06} />
    <ColorSwatch title="Indigo" colorKey="indigo07" hex={theme.colors.indigo07} />
    <ColorSwatch title="Royal" colorKey="indigo08" hex={theme.colors.indigo08} />
    <ColorSwatch title="Zaffre" colorKey="indigo09" hex={theme.colors.indigo09} />
    <ColorSwatch title="Xiketic" colorKey="indigo10" hex={theme.colors.indigo10} />
  </ColorSwatchGrid>
);

export const Tertiary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Bubbles" colorKey="turquoise01" hex={theme.colors.turquoise01} />
    <ColorSwatch title="Diamond" colorKey="turquoise02" hex={theme.colors.turquoise02} />
    <ColorSwatch title="Cyan" colorKey="turquoise03" hex={theme.colors.turquoise03} />
    <ColorSwatch title="Sky" colorKey="turquoise04" hex={theme.colors.turquoise04} />
    <ColorSwatch title="Surf" colorKey="turquoise05" hex={theme.colors.turquoise05} />
    <ColorSwatch title="Turquoise" colorKey="turquoise06" hex={theme.colors.turquoise06} />
    <ColorSwatch title="Bondi" colorKey="turquoise07" hex={theme.colors.turquoise07} />
    <ColorSwatch title="Teal" colorKey="turquoise08" hex={theme.colors.turquoise08} />
    <ColorSwatch title="Metallic" colorKey="turquoise09" hex={theme.colors.turquoise09} />
    <ColorSwatch title="Jungle" colorKey="turquoise10" hex={theme.colors.turquoise10} />
  </ColorSwatchGrid>
);

export const FunctionalGreen = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Honeydew" colorKey="green01" hex={theme.colors.green01} />
    <ColorSwatch title="Timberwolf" colorKey="green02" hex={theme.colors.green02} />
    <ColorSwatch title="Celadon" colorKey="green03" hex={theme.colors.green03} />
    <ColorSwatch title="Granny" colorKey="green04" hex={theme.colors.green04} />
    <ColorSwatch title="Pistachio" colorKey="green05" hex={theme.colors.green05} />
    <ColorSwatch title="Bud" colorKey="green06" hex={theme.colors.green06} />
    <ColorSwatch title="Leaf" colorKey="green07" hex={theme.colors.green07} />
    <ColorSwatch title="Fern" colorKey="green08" hex={theme.colors.green08} />
    <ColorSwatch title="Mughal" colorKey="green09" hex={theme.colors.green09} />
    <ColorSwatch title="Leather" colorKey="green10" hex={theme.colors.green10} />
  </ColorSwatchGrid>
);

export const FunctionalYellow = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Seashell" colorKey="yellow01" hex={theme.colors.yellow01} />
    <ColorSwatch title="Lumber" colorKey="yellow02" hex={theme.colors.yellow02} />
    <ColorSwatch title="Tuscan" colorKey="yellow03" hex={theme.colors.yellow03} />
    <ColorSwatch title="Topaz" colorKey="yellow04" hex={theme.colors.yellow04} />
    <ColorSwatch title="Rajah" colorKey="yellow05" hex={theme.colors.yellow05} />
    <ColorSwatch title="Yellow" colorKey="yellow06" hex={theme.colors.yellow06} />
    <ColorSwatch title="Mango" colorKey="yellow07" hex={theme.colors.yellow07} />
    <ColorSwatch title="Liver" colorKey="yellow08" hex={theme.colors.yellow08} />
    <ColorSwatch title="Drab" colorKey="yellow09" hex={theme.colors.yellow09} />
    <ColorSwatch title="Pullman" colorKey="yellow10" hex={theme.colors.yellow10} />
  </ColorSwatchGrid>
);

export const FunctionalRed = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Linen" colorKey="red01" hex={theme.colors.red01} />
    <ColorSwatch title="Pink" colorKey="red02" hex={theme.colors.red02} />
    <ColorSwatch title="Salmon" colorKey="red03" hex={theme.colors.red03} />
    <ColorSwatch title="Pastel" colorKey="red04" hex={theme.colors.red04} />
    <ColorSwatch title="Vermilion" colorKey="red05" hex={theme.colors.red05} />
    <ColorSwatch title="Crimson" colorKey="red06" hex={theme.colors.red06} />
    <ColorSwatch title="Soda" colorKey="red07" hex={theme.colors.red07} />
    <ColorSwatch title="Sangria" colorKey="red08" hex={theme.colors.red08} />
    <ColorSwatch title="Rosewood" colorKey="red09" hex={theme.colors.red09} />
    <ColorSwatch title="Bean" colorKey="red10" hex={theme.colors.red10} />
  </ColorSwatchGrid>
);

export const Neutral = () => (
  <>
    <ColorSwatchGrid>
      <ColorSwatch title="White" colorKey="greylight01" hex={theme.colors.greylight01} hasBorder />
      <ColorSwatch title="Ghost" colorKey="greylight02" hex={theme.colors.greylight02} hasBorder />
      <ColorSwatch title="Isabelline" colorKey="greylight03" hex={theme.colors.greylight03} />
      <ColorSwatch title="Gainsboro" colorKey="greylight04" hex={theme.colors.greylight04} />
      <ColorSwatch title="Ash Grey" colorKey="greylight05" hex={theme.colors.greylight05} />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch title="Crayola" colorKey="greymed01" hex={theme.colors.greymed01} />
      <ColorSwatch title="Cadet" colorKey="greymed02" hex={theme.colors.greymed02} />
      <ColorSwatch title="Light state" colorKey="greymed03" hex={theme.colors.greymed03} />
      <ColorSwatch title="Slate" colorKey="greymed04" hex={theme.colors.greymed04} />
      <ColorSwatch title="Electric" colorKey="greymed05" hex={theme.colors.greymed05} />
    </ColorSwatchGrid>
    <ColorSwatchGrid>
      <ColorSwatch title="Charcoal" colorKey="greydark01" hex={theme.colors.greydark01} />
      <ColorSwatch title="Gunmetal" colorKey="greydark02" hex={theme.colors.greydark02} />
      <ColorSwatch title="Raisin" colorKey="greydark03" hex={theme.colors.greydark03} />
      <ColorSwatch title="Rich black" colorKey="greydark04" hex={theme.colors.greydark04} />
      <ColorSwatch title="Black" colorKey="greydark05" hex={theme.colors.greydark05} />
    </ColorSwatchGrid>
  </>
);
