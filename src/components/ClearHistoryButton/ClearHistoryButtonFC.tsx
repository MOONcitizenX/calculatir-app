import { useCalculatorContext } from '@components/CalculatorProvider';
import { useTypedActions } from '@hooks/useTypedActions';
import { StyledClearButton } from './ClearHistoryButton.style';

export const ClearHistoryButtonFC = () => {
  const { calculator } = useCalculatorContext();
  const { changeDisplayExpression, changeDisplayResult, clearHistory } = useTypedActions();

  const resetAllHistory = () => {
    calculator.clearAll();
    clearHistory();
    changeDisplayExpression('0');
    changeDisplayResult('0');
  };

  return <StyledClearButton onClick={resetAllHistory}>Clear history</StyledClearButton>;
};
