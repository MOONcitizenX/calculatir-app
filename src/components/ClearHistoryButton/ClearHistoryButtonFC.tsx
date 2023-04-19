import { useCalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { useActions } from '@hooks/useActions';
import { StyledClearButton } from '@styles/components/Settings.style';

export const ClearHistoryButtonFC = () => {
  const { calculator } = useCalculatorContext();
  const { changeDisplayExpression, changeDisplayResult, clearHistory } = useActions();

  const resetAllHistory = () => {
    clearHistory();
    calculator.clearAll();
    changeDisplayExpression('0');
    changeDisplayResult('0');
  };

  return <StyledClearButton onClick={resetAllHistory}>Clear history</StyledClearButton>;
};
