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
    <ColorSwatch title="Pale Aqua" colorKey="blue02" hex={theme.colors.blue02} />
    <ColorSwatch title="Jordy Blue" colorKey="blue03" hex={theme.colors.blue03} />
    <ColorSwatch title="Blue Jeans" colorKey="blue04" hex={theme.colors.blue04} />
    <ColorSwatch title="Bleu de France" colorKey="blue05" hex={theme.colors.blue05} />
    <ColorSwatch title="Brandeis Blue" colorKey="blue06" hex={theme.colors.blue06} />
    <ColorSwatch title="Absolute Zero" colorKey="blue07" hex={theme.colors.blue07} />
    <ColorSwatch title="Usafa Blue" colorKey="blue08" hex={theme.colors.blue08} />
    <ColorSwatch title="Dark Midnight Blue" colorKey="blue09" hex={theme.colors.blue09} />
    <ColorSwatch title="Maastricht Blue" colorKey="blue10" hex={theme.colors.blue10} />
  </ColorSwatchGrid>
);

export const Secondary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Soap" colorKey="indigo01" hex={theme.colors.indigo01} />
    <ColorSwatch title="Light Steel Blue" colorKey="indigo02" hex={theme.colors.indigo02} />
    <ColorSwatch title="Ceil" colorKey="indigo03" hex={theme.colors.indigo03} />
    <ColorSwatch title="Glaucous" colorKey="indigo04" hex={theme.colors.indigo04} />
    <ColorSwatch title="Pigment Blue" colorKey="indigo05" hex={theme.colors.indigo05} />
    <ColorSwatch title="Indigo" colorKey="indigo06" hex={theme.colors.indigo06} />
    <ColorSwatch title="Dark Imperial Blue" colorKey="indigo07" hex={theme.colors.indigo07} />
    <ColorSwatch title="Royal Blue" colorKey="indigo08" hex={theme.colors.indigo08} />
    <ColorSwatch title="Maastricht Indigo" colorKey="indigo09" hex={theme.colors.indigo09} />
    <ColorSwatch title="Black Indigo" colorKey="indigo10" hex={theme.colors.indigo10} />
  </ColorSwatchGrid>
);

export const Tertiary = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Bubbles" colorKey="turquoise01" hex={theme.colors.turquoise01} />
    <ColorSwatch title="Diamond" colorKey="turquoise02" hex={theme.colors.turquoise02} />
    <ColorSwatch title="Pale Cyan" colorKey="turquoise03" hex={theme.colors.turquoise03} />
    <ColorSwatch title="Sky Blue" colorKey="turquoise04" hex={theme.colors.turquoise04} />
    <ColorSwatch title="Turquoise Surf" colorKey="turquoise05" hex={theme.colors.turquoise05} />
    <ColorSwatch title="Turquoise" colorKey="turquoise06" hex={theme.colors.turquoise06} />
    <ColorSwatch title="Bondi Blue" colorKey="turquoise07" hex={theme.colors.turquoise07} />
    <ColorSwatch title="Teal" colorKey="turquoise08" hex={theme.colors.turquoise08} />
    <ColorSwatch title="Dark Cyan" colorKey="turquoise09" hex={theme.colors.turquoise09} />
    <ColorSwatch title="Midnight Green" colorKey="turquoise10" hex={theme.colors.turquoise10} />
  </ColorSwatchGrid>
);

export const FunctionalGreen = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Honeydew" colorKey="green01" hex={theme.colors.green01} />
    <ColorSwatch title="Timberwolf" colorKey="green02" hex={theme.colors.green02} />
    <ColorSwatch title="Celadon" colorKey="green03" hex={theme.colors.green03} />
    <ColorSwatch title="Granny Smith Apple" colorKey="green04" hex={theme.colors.green04} />
    <ColorSwatch title="Pistachio" colorKey="green05" hex={theme.colors.green05} />
    <ColorSwatch title="Green Bud" colorKey="green06" hex={theme.colors.green06} />
    <ColorSwatch title="Palm Leaf" colorKey="green07" hex={theme.colors.green07} />
    <ColorSwatch title="Fern Green" colorKey="green08" hex={theme.colors.green08} />
    <ColorSwatch title="Mughal Green" colorKey="green09" hex={theme.colors.green09} />
    <ColorSwatch title="Leather Jacket" colorKey="green10" hex={theme.colors.green10} />
  </ColorSwatchGrid>
);

export const FunctionalYellow = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Seashell" colorKey="yellow01" hex={theme.colors.yellow01} />
    <ColorSwatch title="Lumber" colorKey="yellow02" hex={theme.colors.yellow02} />
    <ColorSwatch title="Tuscan" colorKey="yellow03" hex={theme.colors.yellow03} />
    <ColorSwatch title="Topaz" colorKey="yellow04" hex={theme.colors.yellow04} />
    <ColorSwatch title="Rajah" colorKey="yellow05" hex={theme.colors.yellow05} />
    <ColorSwatch title="Yellow Orange" colorKey="yellow06" hex={theme.colors.yellow06} />
    <ColorSwatch title="Bronze" colorKey="yellow07" hex={theme.colors.yellow07} />
    <ColorSwatch title="Liver" colorKey="yellow08" hex={theme.colors.yellow08} />
    <ColorSwatch title="Drab" colorKey="yellow09" hex={theme.colors.yellow09} />
    <ColorSwatch title="Pullman" colorKey="yellow10" hex={theme.colors.yellow10} />
  </ColorSwatchGrid>
);

export const FunctionalRed = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="Linen" colorKey="red01" hex={theme.colors.red01} />
    <ColorSwatch title="Spanish Pink" colorKey="red02" hex={theme.colors.red02} />
    <ColorSwatch title="Salmon Pink" colorKey="red03" hex={theme.colors.red03} />
    <ColorSwatch title="Pastel" colorKey="red04" hex={theme.colors.red04} />
    <ColorSwatch title="Vermilion" colorKey="red05" hex={theme.colors.red05} />
    <ColorSwatch title="Crimson" colorKey="red06" hex={theme.colors.red06} />
    <ColorSwatch title="Orange" colorKey="red07" hex={theme.colors.red07} />
    <ColorSwatch title="Sangria" colorKey="red08" hex={theme.colors.red08} />
    <ColorSwatch title="Rosewood" colorKey="red09" hex={theme.colors.red09} />
    <ColorSwatch title="Bean" colorKey="red10" hex={theme.colors.red10} />
  </ColorSwatchGrid>
);

export const Neutral = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="White" colorKey="grey01" hex={theme.colors.grey01} hasBorder />
    <ColorSwatch title="Ghost" colorKey="grey02" hex={theme.colors.grey02} />
    <ColorSwatch title="Isabelline" colorKey="grey03" hex={theme.colors.grey03} />
    <ColorSwatch title="Gainsboro" colorKey="grey04" hex={theme.colors.grey04} />
    <ColorSwatch title="Ash Grey" colorKey="grey05" hex={theme.colors.grey05} />
    <ColorSwatch title="Grey Blue" colorKey="grey06" hex={theme.colors.grey06} />
    <ColorSwatch title="Aurometalsaurus" colorKey="grey07" hex={theme.colors.grey07} />
    <ColorSwatch title="Outer Space" colorKey="grey08" hex={theme.colors.grey08} />
    <ColorSwatch title="Japanese Indigo" colorKey="grey09" hex={theme.colors.grey09} />
    <ColorSwatch title="Yankees Blue" colorKey="grey10" hex={theme.colors.grey10} />
  </ColorSwatchGrid>
);
