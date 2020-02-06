import styledBase from 'styled-components';

export const primitives = {
  Image: styledBase.img,
  Text: styledBase.div,
  View: styledBase.div,
};

export const styledWrapper = styledBase as typeof styledBase;
