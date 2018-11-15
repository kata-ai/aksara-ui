import * as React from 'react';
import { Circle } from '@kata-kit/loading';
import Select, { Props } from 'react-select/lib/Creatable';
import { ValueType, ActionMeta, InputActionMeta } from 'react-select/lib/types';
import { defaultStyle } from '../styles';

interface DefaultSelectOptions {
  label: string;
  value: string;
}

interface State<TOptions = DefaultSelectOptions> {
  menuIsOpen: boolean;
  selected: ValueType<TOptions>;
  selectedValue?: string;
}

class SelectCreatable<TOptions = DefaultSelectOptions> extends React.Component<
  Props<TOptions>,
  State<TOptions>
> {
  static defaultProps = {
    defaultValue: undefined,
    defaultInputValue: undefined,
    defaultMenuIsOpen: false
  };

  constructor(props: Props<TOptions>) {
    super(props);

    this.state = {
      menuIsOpen: false,
      selected: undefined,
      selectedValue: undefined
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen() {
    this.setState({ menuIsOpen: true });
  }

  handleMenuClose() {
    this.setState({ menuIsOpen: false });
  }

  handleInputChange = (value: string, actionMeta: InputActionMeta) => {
    if (this.props.onInputChange) {
      this.props.onInputChange(value, actionMeta);
    }
    this.setState({ selectedValue: value });
  };

  handleChange = (value: ValueType<TOptions>, action: ActionMeta) => {
    if (this.props.onChange) {
      this.props.onChange(value, action);
    }
    this.setState({ selected: value });
  };

  handleBlur(e: React.FocusEvent<HTMLElement>) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render() {
    const { options, styles, components, ...rest } = this.props;
    const { menuIsOpen, selected, selectedValue } = this.state;
    return (
      <Select
        value={selected}
        inputValue={selectedValue}
        menuIsOpen={menuIsOpen}
        onMenuOpen={this.handleMenuOpen}
        onMenuClose={this.handleMenuClose}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={options}
        styles={{ ...defaultStyle, ...styles }}
        components={{
          LoadingIndicator: () => <Circle size={24} />,
          ...components
        }}
        {...rest}
      />
    );
  }
}

export default SelectCreatable;
