import { useState } from 'react';
import { ControlPanelFC } from '@components/ControlPanel';
import { DisplayFC } from '@components/Display';
import { KeypadFC } from '@components/Keypad';
import { HistoryFC } from '@components/History';
import { CalculatorWrapper, StyledCalculator } from './Calculator.style';

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
