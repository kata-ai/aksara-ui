import * as React from 'react';
import { IconTickRounded } from '@aksara-ui/icons';
import { Box } from '../../../layout/box';
import { Text } from '../../../typography/components/Text';
import { useComponentStyles } from '../../../system';

interface StepInternalConfig {
  index?: number;
  isCompletedStep?: boolean;
  isCurrentStep?: boolean;
  isLastStep?: boolean;
  label: string;
}

const StepHead: React.FC<StepInternalConfig> = ({ isCompletedStep, isCurrentStep, label: labelProp }) => {
  const stepperHeaderStyles = useComponentStyles('stepHeader', { isCompletedStep, isCurrentStep });
  const stepperHeaderBorderStyles = useComponentStyles('stepHeaderBorder', { isCompletedStep, isCurrentStep });
  const circleIconStyles = useComponentStyles('circleIcon', { isCompletedStep, isCurrentStep });
  const labelStyles = useComponentStyles('stepHeaderLabel', { isCompletedStep, isCurrentStep });

  const renderIcon = () => {
    if (isCompletedStep) {
      return <IconTickRounded width={16} height={16} fill="green07" />;
    }
    if (!isCompletedStep && !isCurrentStep) {
      return <Box sx={circleIconStyles} />;
    }
    return <Box sx={circleIconStyles} />;
  };

  return (
    <Box sx={stepperHeaderStyles}>
      <Box sx={stepperHeaderBorderStyles} />
      <Box display="flex" alignItems="center">
        {renderIcon()}
        <Text sx={labelStyles}>{labelProp}</Text>
      </Box>
    </Box>
  );
};
export default StepHead;
