import { OperatorsPriority, Brackets } from '@constants/operators';
import { isNumeric } from './isNumeric';
import { type Operator } from '@constants/operators';

export const getPolishToken = (tokens: Array<string | Operator | Brackets>) => {
  const polishToken: Array<string | Operator> = [];
  const stack: Array<Operator | Brackets> = [];

  tokens.forEach((entry) => {
    if (isNumeric(entry)) {
      polishToken.push(entry);
    } else if (entry === Brackets.OPEN_BRACKET) {
      stack.push(entry);
    } else if (entry === Brackets.CLOSE_BRACKET) {
      while (stack[stack.length - 1] !== Brackets.OPEN_BRACKET) {
        const lastOperation = stack.pop();
        if (lastOperation !== undefined) {
          polishToken.push(lastOperation);
        }
      }
      stack.pop();
    } else {
      const operator = entry as Operator;
      if (stack.length > 0) {
        while (
          OperatorsPriority[stack[stack.length - 1] as Operator] >= OperatorsPriority[operator]
        ) {
          const lastOperation = stack.pop();
          if (lastOperation !== undefined) {
            polishToken.push(lastOperation);
          }
        }
      }
      stack.push(operator);
    }
  });

  while (stack.length > 0) {
    const lastOperation = stack.pop();
    if (lastOperation !== undefined) {
      polishToken.push(lastOperation);
    }
  }
  return { polishToken, isSolvable: polishToken.length % 2 !== 0 };
};
