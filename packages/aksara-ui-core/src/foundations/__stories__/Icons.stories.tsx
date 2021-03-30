import * as React from 'react';

import { aksaraIconMaps } from '../../utils/storybook';
import { IconDetail, IconGrid } from '../../utils/storybook/icons';

export default {
  title: 'Core/Foundations/Icons',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const BasicIcons = () => (
  <IconGrid>
    {aksaraIconMaps.basic.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Document = () => (
  <IconGrid>
    {aksaraIconMaps.doc.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Menu = () => (
  <IconGrid>
    {aksaraIconMaps.menu.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const ECommerce = () => (
  <IconGrid>
    {aksaraIconMaps.ecommerce.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const BusinessFinance = () => (
  <IconGrid>
    {aksaraIconMaps.businessfinance.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Marketing = () => (
  <IconGrid>
    {aksaraIconMaps.marketing.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Medicine = () => (
  <IconGrid>
    {aksaraIconMaps.medicine.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Atoms = () => (
  <IconGrid>
    {aksaraIconMaps.atoms.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Chart = () => (
  <IconGrid>
    {aksaraIconMaps.chart.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const AI = () => (
  <IconGrid>
    {aksaraIconMaps.ai.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const User = () => (
  <IconGrid>
    {aksaraIconMaps.user.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Media = () => (
  <IconGrid>
    {aksaraIconMaps.media.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Social = () => (
  <IconGrid>
    {aksaraIconMaps.social.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Technology = () => (
  <IconGrid>
    {aksaraIconMaps.tech.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);
