import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { WicaraProvider } from '.';
import { ColorSwatch, SystemWrapper, SystemBlock } from '../../utils/storybook';
import { Heading } from '../typography';
import { themeProps } from '../../Theme';
import { Box } from '../box';

const readme = require('./README.md');

const ColorSwatchGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

storiesOf('Core|Foundations/Theme', module)
  .addDecorator(SystemWrapper)
  .add(
    'reset',
    () => {
      const testLabelId = 'test';

      return (
        <WicaraProvider>
          <h1>h1. Heading</h1>
          <h2>h2. Heading</h2>
          <h3>h3. Heading</h3>
          <h4>h4. Heading</h4>
          <h5>h5. Heading</h5>
          <h6>h6. Heading</h6>

          <p>Lorem ipsum other castle, arrow to the knee set us up the bomb.</p>

          <button type="button" onClick={action('button-click')}>
            Do Something
          </button>

          <br />
          <br />

          <div>
            <label htmlFor={testLabelId}>
              Test input
              <input
                id={testLabelId}
                name={testLabelId}
                type="text"
                placeholder="Type something..."
              />
            </label>
          </div>

          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quos animi{' '}
            <a href="https://www.youtube.com/watch?v=ERU9ZtTs3Fk">necessitatibus</a> dolore ea.
            Officia dolor soluta ut possimus non vero sint tenetur illo nulla, reiciendis quisquam
            fugiat. Est, quidem.
          </p>
        </WicaraProvider>
      );
    },
    {
      notes: { markdown: readme }
    }
  )
  .add('colors', () => {
    return (
      <SystemBlock
        title="Colors"
        subtitle="These are the primary colors used within the Aksara system."
      >
        <Heading scale={800}>Primary</Heading>
        <ColorSwatchGrid>
          <ColorSwatch title="White" colorKey="white" hex={themeProps.colors.white} hasBorder />
          <ColorSwatch title="Gray 10" colorKey="gray10" hex={themeProps.colors.gray10} />
          <ColorSwatch title="Gray 20" colorKey="gray20" hex={themeProps.colors.gray20} />
          <ColorSwatch title="Gray 30" colorKey="gray30" hex={themeProps.colors.gray30} />
          <ColorSwatch title="Gray 40" colorKey="gray40" hex={themeProps.colors.gray40} />
          <ColorSwatch title="Gray 50" colorKey="gray50" hex={themeProps.colors.gray50} />
          <ColorSwatch title="Gray 60" colorKey="gray60" hex={themeProps.colors.gray60} />
          <ColorSwatch title="Gray 70" colorKey="gray70" hex={themeProps.colors.gray70} />
          <ColorSwatch title="Gray 80" colorKey="gray80" hex={themeProps.colors.gray80} />
        </ColorSwatchGrid>
        <Heading scale={800}>Secondary</Heading>
        <ColorSwatchGrid>
          <ColorSwatch title="Red" colorKey="red" hex={themeProps.colors.red} />
          <ColorSwatch title="Green" colorKey="green" hex={themeProps.colors.green} />
          <ColorSwatch title="Yellow" colorKey="yellow" hex={themeProps.colors.yellow} />
        </ColorSwatchGrid>
        <Heading scale={800}>Brand Colors</Heading>
        <ColorSwatchGrid>
          <ColorSwatch
            title="Soft Kata Blue"
            colorKey="softKataBlue"
            hex={themeProps.colors.softKataBlue}
          />
          <ColorSwatch
            title="Light Kata Blue"
            colorKey="lightKataBlue"
            hex={themeProps.colors.lightKataBlue}
          />
          <ColorSwatch title="Kata Blue" colorKey="kataBlue" hex={themeProps.colors.kataBlue} />
          <ColorSwatch
            title="Dark Kata Blue"
            colorKey="darkKataBlue"
            hex={themeProps.colors.darkKataBlue}
          />
        </ColorSwatchGrid>
        <ColorSwatchGrid>
          <ColorSwatch
            title="Light Cobalt"
            colorKey="lightCobalt"
            hex={themeProps.colors.lightCobalt}
          />
          <ColorSwatch
            title="Semi Cobalt"
            colorKey="semiCobalt"
            hex={themeProps.colors.semiCobalt}
          />
          <ColorSwatch title="Cobalt" colorKey="cobalt" hex={themeProps.colors.cobalt} />
          <ColorSwatch
            title="Dark Cobalt"
            colorKey="darkCobalt"
            hex={themeProps.colors.darkCobalt}
          />
        </ColorSwatchGrid>
        <Heading scale={800}>Special Colors</Heading>
        <ColorSwatchGrid>
          <ColorSwatch title="Special 01" colorKey="special01" hex={themeProps.colors.special01} />
          <ColorSwatch title="Special 02" colorKey="special02" hex={themeProps.colors.special02} />
          <ColorSwatch title="Special 03" colorKey="special03" hex={themeProps.colors.special03} />
          <ColorSwatch title="Special 04" colorKey="special04" hex={themeProps.colors.special04} />
          <ColorSwatch title="Special 05" colorKey="special05" hex={themeProps.colors.special05} />
          <ColorSwatch title="Special 06" colorKey="special06" hex={themeProps.colors.special06} />
          <ColorSwatch title="Special 07" colorKey="special07" hex={themeProps.colors.special07} />
          <ColorSwatch title="Special 08" colorKey="special08" hex={themeProps.colors.special08} />
          <ColorSwatch title="Special 09" colorKey="special09" hex={themeProps.colors.special09} />
          <ColorSwatch title="Special 10" colorKey="special10" hex={themeProps.colors.special10} />
        </ColorSwatchGrid>
      </SystemBlock>
    );
  });
