import { useCalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { StyledDisplay, StyledExpression, StyledResult } from '@styles/components/Display.style';
import { useEffect, useState } from 'react';

export const DisplayFC = () => {
  const { calculator } = useCalculatorContext();

  const [expression, setExpression] = useState<string>('0');
  const [result, setResult] = useState<string>('0');

  useEffect(() => {
    const updateOnChange = () => {
      const expression = calculator.expression;
      setExpression(expression.length > 0 ? expression : '0');
      const result = calculator.result;
      setResult(result.length > 0 ? result : '');
    };

    calculator.addEventListener('change', updateOnChange);

    return () => {
      calculator.removeEventListener('change', updateOnChange);
    };
  }, [calculator]);

  return (
    <StyledDisplay>
      <StyledExpression>{expression}</StyledExpression>
      <StyledResult>{result}</StyledResult>
    </StyledDisplay>
  );
};
