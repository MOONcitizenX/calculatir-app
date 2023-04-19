import { useCalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { useActions } from '@hooks/useActions';
import { StyledClearButton } from './ClearHistoryButton.style';

export const ClearHistoryButtonFC = () => {
  const { calculator } = useCalculatorContext();
  const { changeDisplayExpression, changeDisplayResult, clearHistory } = useActions();

  const resetAllHistory = () => {
    calculator.clearAll();
    clearHistory();
    changeDisplayExpression('0');
    changeDisplayResult('0');
  };

  return <StyledClearButton onClick={resetAllHistory}>Clear history</StyledClearButton>;
};
