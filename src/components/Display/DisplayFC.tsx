import { useCalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { changeEvent } from '@constants/calculatorEvent';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { StyledDisplay, StyledExpression, StyledResult } from '@styles/components/Display.style';
import { useEffect } from 'react';

export const DisplayFC = () => {
  const { calculator } = useCalculatorContext();

  const expression = useTypedSelector((state) => state.display.expression);
  const result = useTypedSelector((state) => state.display.result);

  const { changeDisplayExpression, changeDisplayResult } = useActions();

  useEffect(() => {
    const updateOnChange = () => {
      const expression = calculator.expression;
      changeDisplayExpression(expression.length > 0 ? expression : '0');
      const result = calculator.result;
      changeDisplayResult(result.length > 0 ? result : '');
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
