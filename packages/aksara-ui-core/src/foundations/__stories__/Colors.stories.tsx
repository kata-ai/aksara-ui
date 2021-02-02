import * as React from 'react';
import { colors } from '../../theme';
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
    <ColorSwatch title="Glitter" colorKey="blue01" hex={colors.blue01} />
    <ColorSwatch title="Pale Aqua" colorKey="blue02" hex={colors.blue02} />
    <ColorSwatch title="Jordy Blue" colorKey="blue03" hex={colors.blue03} />
    <ColorSwatch title="Blue Jeans" colorKey="blue04" hex={colors.blue04} />
    <ColorSwatch title="Bleu de France" colorKey="blue05" hex={colors.blue05} />
    <ColorSwatch title="Brandeis Blue" colorKey="blue06" hex={colors.blue06} />
    <ColorSwatch title="Absolute Zero" colorKey="blue07" hex={colors.blue07} />
    <ColorSwatch title="Usafa Blue" colorKey="blue08" hex={colors.blue08} />
    <ColorSwatch title="Dark Midnight Blue" colorKey="blue09" hex={colors.blue09} />
    <ColorSwatch title="Maastricht Blue" colorKey="blue10" hex={colors.blue10} />
  </ColorSwatchGrid>
);

export const Secondary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Soap" colorKey="indigo01" hex={colors.indigo01} />
    <ColorSwatch title="Light Steel Blue" colorKey="indigo02" hex={colors.indigo02} />
    <ColorSwatch title="Ceil" colorKey="indigo03" hex={colors.indigo03} />
    <ColorSwatch title="Glaucous" colorKey="indigo04" hex={colors.indigo04} />
    <ColorSwatch title="Pigment Blue" colorKey="indigo05" hex={colors.indigo05} />
    <ColorSwatch title="Indigo" colorKey="indigo06" hex={colors.indigo06} />
    <ColorSwatch title="Dark Imperial Blue" colorKey="indigo07" hex={colors.indigo07} />
    <ColorSwatch title="Royal Blue" colorKey="indigo08" hex={colors.indigo08} />
    <ColorSwatch title="Maastricht Indigo" colorKey="indigo09" hex={colors.indigo09} />
    <ColorSwatch title="Black Indigo" colorKey="indigo10" hex={colors.indigo10} />
  </ColorSwatchGrid>
);

export const Tertiary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Bubbles" colorKey="turquoise01" hex={colors.turquoise01} />
    <ColorSwatch title="Diamond" colorKey="turquoise02" hex={colors.turquoise02} />
    <ColorSwatch title="Pale Cyan" colorKey="turquoise03" hex={colors.turquoise03} />
    <ColorSwatch title="Sky Blue" colorKey="turquoise04" hex={colors.turquoise04} />
    <ColorSwatch title="Turquoise Surf" colorKey="turquoise05" hex={colors.turquoise05} />
    <ColorSwatch title="Turquoise" colorKey="turquoise06" hex={colors.turquoise06} />
    <ColorSwatch title="Bondi Blue" colorKey="turquoise07" hex={colors.turquoise07} />
    <ColorSwatch title="Teal" colorKey="turquoise08" hex={colors.turquoise08} />
    <ColorSwatch title="Dark Cyan" colorKey="turquoise09" hex={colors.turquoise09} />
    <ColorSwatch title="Midnight Green" colorKey="turquoise10" hex={colors.turquoise10} />
  </ColorSwatchGrid>
);

export const FunctionalGreen = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Honeydew" colorKey="green01" hex={colors.green01} />
    <ColorSwatch title="Timberwolf" colorKey="green02" hex={colors.green02} />
    <ColorSwatch title="Celadon" colorKey="green03" hex={colors.green03} />
    <ColorSwatch title="Granny Smith Apple" colorKey="green04" hex={colors.green04} />
    <ColorSwatch title="Pistachio" colorKey="green05" hex={colors.green05} />
    <ColorSwatch title="Green Bud" colorKey="green06" hex={colors.green06} />
    <ColorSwatch title="Palm Leaf" colorKey="green07" hex={colors.green07} />
    <ColorSwatch title="Fern Green" colorKey="green08" hex={colors.green08} />
    <ColorSwatch title="Mughal Green" colorKey="green09" hex={colors.green09} />
    <ColorSwatch title="Leather Jacket" colorKey="green10" hex={colors.green10} />
  </ColorSwatchGrid>
);

export const FunctionalYellow = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Seashell" colorKey="yellow01" hex={colors.yellow01} />
    <ColorSwatch title="Lumber" colorKey="yellow02" hex={colors.yellow02} />
    <ColorSwatch title="Tuscan" colorKey="yellow03" hex={colors.yellow03} />
    <ColorSwatch title="Topaz" colorKey="yellow04" hex={colors.yellow04} />
    <ColorSwatch title="Rajah" colorKey="yellow05" hex={colors.yellow05} />
    <ColorSwatch title="Yellow Orange" colorKey="yellow06" hex={colors.yellow06} />
    <ColorSwatch title="Bronze" colorKey="yellow07" hex={colors.yellow07} />
    <ColorSwatch title="Liver" colorKey="yellow08" hex={colors.yellow08} />
    <ColorSwatch title="Drab" colorKey="yellow09" hex={colors.yellow09} />
    <ColorSwatch title="Pullman" colorKey="yellow10" hex={colors.yellow10} />
  </ColorSwatchGrid>
);

export const FunctionalRed = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Linen" colorKey="red01" hex={colors.red01} />
    <ColorSwatch title="Spanish Pink" colorKey="red02" hex={colors.red02} />
    <ColorSwatch title="Salmon Pink" colorKey="red03" hex={colors.red03} />
    <ColorSwatch title="Pastel" colorKey="red04" hex={colors.red04} />
    <ColorSwatch title="Vermilion" colorKey="red05" hex={colors.red05} />
    <ColorSwatch title="Crimson" colorKey="red06" hex={colors.red06} />
    <ColorSwatch title="Orange" colorKey="red07" hex={colors.red07} />
    <ColorSwatch title="Sangria" colorKey="red08" hex={colors.red08} />
    <ColorSwatch title="Rosewood" colorKey="red09" hex={colors.red09} />
    <ColorSwatch title="Bean" colorKey="red10" hex={colors.red10} />
  </ColorSwatchGrid>
);

export const Neutral = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="White" colorKey="grey01" hex={colors.grey01} hasBorder />
    <ColorSwatch title="Ghost" colorKey="grey02" hex={colors.grey02} />
    <ColorSwatch title="Isabelline" colorKey="grey03" hex={colors.grey03} />
    <ColorSwatch title="Gainsboro" colorKey="grey04" hex={colors.grey04} />
    <ColorSwatch title="Ash Grey" colorKey="grey05" hex={colors.grey05} />
    <ColorSwatch title="Grey Blue" colorKey="grey06" hex={colors.grey06} />
    <ColorSwatch title="Aurometalsaurus" colorKey="grey07" hex={colors.grey07} />
    <ColorSwatch title="Outer Space" colorKey="grey08" hex={colors.grey08} />
    <ColorSwatch title="Japanese Indigo" colorKey="grey09" hex={colors.grey09} />
    <ColorSwatch title="Yankees Blue" colorKey="grey10" hex={colors.grey10} />
  </ColorSwatchGrid>
);
