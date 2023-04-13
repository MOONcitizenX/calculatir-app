import { OperatorsPriority, Brackets } from '@constants/Operators';
import { isNumeric } from './isNumeric';
import { type Operator } from '@constants/Operators';

export const getPolishToken = (tokens: Array<string | Operator | Brackets>) => {
  const polishToken: Array<string | Operator> = [];
  const stack: Array<Operator | Brackets> = [];

  tokens.forEach((entry) => {
    if (isNumeric(entry)) {
      polishToken.push(entry);
    } else if (entry === Brackets.openingBracket) {
      stack.push(entry);
    } else if (entry === Brackets.closingBracket) {
      while (stack[stack.length - 1] !== Brackets.openingBracket) {
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
