import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

import '../../assets/sass/vendor/react-dates.scss';
import './DateRangePicker.scss';

interface Props {
  startDate?: number;
  endDate?: number;
  changeDate: (startDate: number, endDate: number) => void;
}

interface State {
  startDate: moment.Moment;
  endDate: moment.Moment;
  focusedInput: any;
}

const CustomArrowIcon = <i className="icon icon-arrow-right" />;
const PreviousIcon = <i className="icon icon-arrow-left" />;
const NextIcon = <i className="icon icon-arrow-right" />;

class Picker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      startDate: moment(props.startDate) || null,
      endDate: moment(props.endDate) || null,
      focusedInput: null
    };
  }

  onDatesChange = ({ startDate, endDate }: State) => {
    this.setState({ startDate, endDate });
    if (startDate !== null && endDate !== null) {
      // Date below is a moment object, and the server only accept timestamp
      // valueOf() is used to retrive timestamp, see moment.js docs
      this.props.changeDate(startDate.valueOf(), endDate.valueOf());
    }
  };

  onFocusChange = (focusedInput: any) => this.setState({ focusedInput });

  isOutsideRange = (data: any) => false;

  render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
        displayFormat="DD MMM YYYY"
        isOutsideRange={this.isOutsideRange}
        customArrowIcon={CustomArrowIcon}
        navPrev={PreviousIcon}
        navNext={NextIcon}
        startDateId="startDateId"
        endDateId="endDateId"
      />
    );
  }
}

export default Picker;
