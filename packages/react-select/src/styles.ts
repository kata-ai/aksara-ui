import { Styles } from 'react-select/lib/styles';
import { variables } from '@kata-kit/theme';

const defaultStyle: Styles = {
  valueContainer: (provided, state) => ({
    ...provided,
    color: variables.colors.gray80,
    backgroundColor: 'transparent'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: variables.colors.gray50
  }),
  control: (provided, state) => ({
    ...provided,
    color: variables.colors.gray80,
    borderRadius: '6px',
    borderColor: state.isFocused
      ? variables.colors.kataBlue
      : variables.colors.gray30,
    backgroundColor: state.isFocused
      ? variables.colors.white
      : state.isDisabled
        ? variables.colors.gray10
        : variables.colors.white,
    boxShadow: state.isFocused
      ? `0 1px 1px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px ${
          variables.colors.softKataBlue
        }`
      : 'none',
    transition: `all ${variables.transitions.transitionFast} ease`,
    '&:hover': {
      backgroundColor: state.isFocused
        ? variables.colors.white
        : variables.colors.gray10,
      borderColor: variables.colors.kataBlue
    }
  }),
  menu: (provided, state) => ({
    ...provided,
    borderColor: 'transparent',
    boxShadow: variables.layerShadows.layer200Shadow
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? variables.colors.white : variables.colors.gray80,
    backgroundColor: state.isSelected
      ? variables.colors.kataBlue
      : 'transparent',
    '&:hover': {
      backgroundColor: state.isSelected
        ? variables.colors.kataBlue
        : variables.colors.gray10
    }
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent'
  })
};

export default defaultStyle;
