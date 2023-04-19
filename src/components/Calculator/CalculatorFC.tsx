import { useState } from 'react';
import { ControlPanelFC } from '@components/ControlPanel/ControlPanelFC';
import { DisplayFC } from '@components/Display/DisplayFC';
import { KeypadFC } from '@components/Keypad/KeypadFC';
import { CalculatorWrapper, StyledCalculator } from '@styles/components/Calculator.style';
import { HistoryFC } from '@components/History/HistoryFC';

export const CalculatorFC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  const toggleHistory = () => {
    setIsHistoryOpen((prev) => !prev);
  };

  return (
    <CalculatorWrapper>
      <StyledCalculator>
        <DisplayFC />
        <KeypadFC />
        <HistoryFC isHistoryOpen={isHistoryOpen} />
        <ControlPanelFC toggleHistory={toggleHistory} isHistoryOpen={isHistoryOpen} />
      </StyledCalculator>
    </CalculatorWrapper>
  );
};
