import { Brackets, type Operator } from '@constants/operators';
import { isNumeric } from './isNumeric';
import { mathOperations } from './mathematicalOperations';
import { CalculatorErrors, maxEntryLength } from '@constants/calculatorErrors';

export const calculate = (polishToken: Array<string | Operator | Brackets>) => {
  const numbers: string[] = [];
  const operations: Array<Operator | Brackets> = [];
  try {
    polishToken.forEach((entry) => {
      if (isNumeric(entry)) {
        numbers.push(entry);
      } else {
        operations.push(entry as Operator);
        while (numbers.length >= 2 && operations.length >= 1) {
          const lastOperands = [Number(numbers.pop()), Number(numbers.pop())];
          const operation = operations.pop();
          let intermediateResult;
          if (
            operation !== undefined &&
            operation !== Brackets.OPEN_BRACKET &&
            operation !== Brackets.CLOSE_BRACKET
          ) {
            intermediateResult = mathOperations[operation](lastOperands[0], lastOperands[1]);
            numbers.push(intermediateResult);
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }

  if (numbers.length === 1) {
    if (Number(numbers[0]) === Infinity) {
      return CalculatorErrors.ERROR;
    }
    if (Number(numbers[0]) > 2 ** 53 - 1 || Number(numbers[0]) < -(2 ** 53 - 1)) {
      return CalculatorErrors.TOO_BIG;
    }
    if (numbers[0].length >= maxEntryLength) {
      return CalculatorErrors.TOO_LONG;
    }
    return numbers[0];
  }
  return '';
};
