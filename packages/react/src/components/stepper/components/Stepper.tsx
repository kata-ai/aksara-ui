import * as React from 'react';
import { Box } from '../../../layout/box';
import { Heading } from '../../../typography/components/Heading';
import StepHead from './StepHead';
import { useComponentStyles } from '../../../system';

export interface StepsProps {
  activeStep: number;
  labels: string[];
  title?: string;
}

export interface Steps {
  label: string;
  content: React.ReactNode;
}

const Stepper: React.FC<StepsProps> = ({ children, activeStep, title, labels }) => {
  const childArr = React.Children.toArray(children);
  const stepCount = childArr.length;
  const stepperHeaderContainerStyles = useComponentStyles('stepHeaderContainer');

  const renderContent = () => {
    if (activeStep <= childArr.length) {
      return React.Children.map(childArr[activeStep], node => {
        if (!React.isValidElement(node)) return null;
        return React.cloneElement(node, node.props);
      });
    }
    return null;
  };

  return (
    <>
      {title && (
        <Box mb="xs">
          <Heading scale={500}>{title}</Heading>
        </Box>
      )}
      <Box sx={stepperHeaderContainerStyles}>
        {React.Children.map(children, (child, i) => {
          const isCompletedStep = (React.isValidElement(child) && child.props.isCompletedStep) ?? i < activeStep;
          const isLastStep = i === stepCount - 1;
          const isCurrentStep = i === activeStep;

          const stepProps = {
            index: i,
            isCompletedStep,
            isCurrentStep,
            isLastStep,
          };

          return React.isValidElement(child) ? <StepHead {...stepProps} label={labels[i]} /> : null;
        })}
      </Box>
      <Box>{renderContent()}</Box>
    </>
  );
};
export default Stepper;
