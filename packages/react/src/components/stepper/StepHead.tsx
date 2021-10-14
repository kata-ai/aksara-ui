import * as React from 'react';
import { IconTickRounded } from '@aksara-ui/icons';
import styled from 'styled-components';
import { Box } from '../../layout/box';
import { Text } from '../../typography/components/Text';

const Circle = styled('div')<{ activeStep: boolean }>`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 2px solid;
`;

const StepHead: React.FC = ({ index, isCompletedStep, isCurrentStep, isLastStep, label: labelProp, state }) => {
  return (
    <Box mt="xxs" display="flex" alignItems="center" flexWrap="wrap">
      {isCurrentStep ? <IconTickRounded /> : <Circle activeStep={false} />}
      <Text ml="xxs" fontWeight={isCurrentStep ? 700 : 500}>
        {labelProp}
      </Text>
    </Box>
  );
};
export default StepHead;
