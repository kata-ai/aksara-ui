import React from 'react';
import { RenderProps, Calendar } from 'dayzed';
import { IconArrowLeft, IconArrowRight } from '@aksara-ui/icons';
import { Box } from '../../../layout/box';
import { IconButton } from '../../button';
import { Text } from '../../../typography';
import DateNumberButton, { DateNumberVariants } from './DateNumber';

const monthNamesShort = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Octtober',
  'November',
  'December',
];
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarBox = ({ calendars, getBackProps, getForwardProps, getDateProps }: RenderProps) => {
  const renderHeader = () => {
    return (
      <Box display={['flex']} justifyContent="space-between" alignItems="center">
        <IconButton variant="plain" aria-label="Back" {...getBackProps({ calendars })}>
          <IconArrowLeft aria-hidden fill="currentColor" />
        </IconButton>

        <IconButton variant="plain" aria-label="Next" {...getForwardProps({ calendars })}>
          <IconArrowRight aria-hidden fill="currentColor" />
        </IconButton>
      </Box>
    );
  };
  const renderDateNumber = (calendar: Calendar) => {
    return calendar.weeks.map((week, weekIndex) =>
      week.map((dateObj, index) => {
        const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
        if (!dateObj) {
          return (
            <div
              key={key}
              style={{
                display: 'inline-block',
                width: '32px',
                border: 'none',
                background: 'transparent',
              }}
            />
          );
        }
        const { date, selected, selectable, today } = dateObj;
        // let background = today ? 'cornflowerblue' : '';
        // background = selected ? 'purple' : background;
        // background = !selectable ? 'teal' : background;
        let variant: DateNumberVariants = 'default';
        if (today) {
          variant = 'currentDate';
        } else if (selected) {
          variant = 'selected';
        }
        return (
          <DateNumberButton key={key} {...getDateProps({ dateObj })} variant={variant}>
            {selectable ? date.getDate() : 'X'}
          </DateNumberButton>
        );
      })
    );
  };
  const renderWeekLabel = (calendar: Calendar) => {
    return weekdayNamesShort.map(weekday => (
      <Box
        display={['inline-block']}
        width="32px"
        key={`${calendar.month}${calendar.year}${weekday}`}
        textAlign="center"
      >
        <Text fontSize="10px" lineHeight="16px" fontWeight="400" color="greymed04" width="32px">
          {weekday}
        </Text>
      </Box>
    ));
  };
  if (calendars.length) {
    return (
      <Box padding="md" maxWidth="256px" boxShadow="4" borderRadius="lg">
        {/* Header */}
        {renderHeader()}
        {calendars.map(calendar => (
          <Box
            key={`${calendar.month}${calendar.year}`}
            position="relative"
            style={{
              display: 'inline-block',
            }}
          >
            <Box
              width="100%"
              position="absolute"
              textAlign="center"
              left="0"
              right="0"
              top="-27px"
              pointerEvents="none"
            >
              <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="grey09">
                {monthNamesShort[calendar.month]} {calendar.year}
              </Text>
            </Box>
            {renderWeekLabel(calendar)}
            {renderDateNumber(calendar)}
          </Box>
        ))}
      </Box>
    );
  }
  return null;
};
export default CalendarBox;
