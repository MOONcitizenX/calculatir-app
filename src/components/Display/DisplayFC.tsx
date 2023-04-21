import { useEffect } from 'react';
import { useCalculatorContext } from '@components/CalculatorProvider';
import { changeEvent } from '@constants/calculatorEvent';
import { useTypedActions } from '@hooks/useTypedActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { StyledDisplay, StyledExpression, StyledResult } from './Display.style';

export const DisplayFC = () => {
  const { calculator } = useCalculatorContext();

  const expression = useTypedSelector((state) => state.display.expression);
  const result = useTypedSelector((state) => state.display.result);

  const { changeDisplayExpression, changeDisplayResult } = useTypedActions();

  useEffect(() => {
    const updateOnChange = () => {
      changeDisplayExpression(calculator.expression);
      changeDisplayResult(calculator.calculateResult());
    };

    calculator.addEventListener(changeEvent, updateOnChange);

    return () => {
      calculator.removeEventListener(changeEvent, updateOnChange);
    };
  }, [calculator, changeDisplayExpression, changeDisplayResult]);

  return (
    <StyledDisplay>
      <StyledExpression>{expression}</StyledExpression>
      <StyledResult>{result}</StyledResult>
    </StyledDisplay>
  );
};
