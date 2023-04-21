import { useCalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { changeEvent } from '@constants/calculatorEvent';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { StyledDisplay, StyledExpression, StyledResult } from './Display.style';
import { useEffect } from 'react';

export const DisplayFC = () => {
  const { calculator } = useCalculatorContext();

  const expression = useTypedSelector((state) => state.display.expression);
  const result = useTypedSelector((state) => state.display.result);

  const { changeDisplayExpression, changeDisplayResult } = useActions();

  useEffect(() => {
    const updateOnChange = () => {
      changeDisplayExpression(calculator.expression);
      changeDisplayResult(calculator.result);
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
