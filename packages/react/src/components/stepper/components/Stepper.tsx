import * as React from 'react';
import { Box } from '../../../layout/box';
import { Heading } from '../../../typography/components/Heading';
import StepHead from '../StepHead';

const Stepper: React.FC<any> = ({ children, activeStep, title, state, labels }) => {
  const childArr = React.Children.toArray(children);
  const stepCount = childArr.length;

  const renderContent = () => {
    if (activeStep <= childArr.length) {
      return React.Children.map(childArr[activeStep], node => {
        if (!React.isValidElement(node)) return;
        return React.Children.map(node.props.children, childNode => childNode);
      });
    }
    return null;
  };
  return (
    <>
      {title && (
        <Box>
          <Heading scale={500}>{title}</Heading>
        </Box>
      )}
      <Box display="flex">
        {React.Children.map(children, (child, i) => {
          const isCompletedStep = (React.isValidElement(child) && child.props.isCompletedStep) ?? i < activeStep;
          const isLastStep = i === stepCount - 1;
          const isCurrentStep = i === activeStep;

          const stepProps = {
            index: i,
            isCompletedStep,
            isCurrentStep,
            isLastStep,
            state,
          };

          return React.isValidElement(child) ? <StepHead {...stepProps} label={labels[i]} /> : null;
        })}
      </Box>
      <Box>{renderContent()}</Box>
    </>
  );
};
export default Stepper;
