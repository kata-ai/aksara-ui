import styledBase from 'styled-components';

export const styled = {
  Image: styledBase.img,
  Text: styledBase.div,
  View: styledBase.div
};

export const styledWrapper = styledBase as typeof styledBase;
