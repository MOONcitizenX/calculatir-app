import { isNumeric } from './helpers/isNumeric';
import { Brackets, OperatorsArray, type Operator, Operations } from '@constants/Operators';
import { calculate } from './helpers/calculate';
import { getPolishToken } from './helpers/getPolishToken';
import { changeEvent } from '@constants/calculatorEvent';

export class Calculator extends EventTarget {
  _expression: string[];
  bracketsCount: number;
  addToHistory: (val: string) => void;

  constructor(addToHistory: (val: string) => void) {
    super();
    this._expression = [];
    this.bracketsCount = 0;
    this.addToHistory = addToHistory;
  }

  get expression() {
    return this._expression.join(' ');
  }

  get result() {
    if (this.bracketsCount === 0) {
      const { polishToken, isSolvable } = getPolishToken(this._expression);
      if (isSolvable) {
        return calculate(polishToken);
      }
    }
    return '';
  }

  inputDigit(digit: string) {
    const lastAction = this.getLastAction();
    if (lastAction !== undefined) {
      if ((isNumeric(lastAction) && lastAction !== '0') || lastAction === Operations.DOT) {
        this._expression[this._expression.length - 1] = lastAction + digit;
      } else if (lastAction === '0') {
        this._expression[this._expression.length - 1] = digit;
      } else {
        this._expression.push(digit);
      }
    } else {
      this._expression.push(digit);
    }
    this.dispatchEvent(new CustomEvent(changeEvent));
  }

  inputDot() {
    let lastAction = this.getLastAction();
    if (lastAction !== undefined) {
      if (isNumeric(lastAction) && !lastAction.includes(Operations.DOT)) {
        lastAction = lastAction + Operations.DOT;
        this._expression[this._expression.length - 1] = lastAction;
        this.dispatchEvent(new CustomEvent(changeEvent));
      }
      if (!lastAction.includes(Operations.DOT)) {
        this._expression.push(Operations.DOT);
        this.dispatchEvent(new CustomEvent(changeEvent));
      }
    } else {
      this._expression.push(Operations.DOT);
      this.dispatchEvent(new CustomEvent(changeEvent));
    }
  }

  inputOperator(operator: Operator) {
    const lastAction = this.getLastAction();
    if (lastAction !== undefined) {
      if (isNumeric(lastAction) || lastAction === Brackets.closingBracket) {
        this._expression.push(operator);
        this.dispatchEvent(new CustomEvent(changeEvent));
        return;
      }
      if (OperatorsArray.includes(lastAction as Operator)) {
        this._expression[this._expression.length - 1] = operator;
        this.dispatchEvent(new CustomEvent(changeEvent));
      }
    }
  }

  inputBracket(bracket: Brackets) {
    const lastAction = this.getLastAction();
    const canInputOpeningBracket =
      (lastAction === undefined || OperatorsArray.includes(lastAction as Operator)) &&
      bracket === Brackets.openingBracket;
    if (canInputOpeningBracket) {
      this._expression.push(bracket);
      this.bracketsCount += 1;
      this.dispatchEvent(new CustomEvent(changeEvent));
      return;
    }
    const canInputClosingBracket =
      lastAction !== undefined &&
      lastAction !== Brackets.openingBracket &&
      !OperatorsArray.includes(lastAction as Operator) &&
      this.bracketsCount > 0 &&
      bracket === Brackets.closingBracket;
    if (canInputClosingBracket) {
      this._expression.push(bracket);
      this.bracketsCount -= 1;
      this.dispatchEvent(new CustomEvent(changeEvent));
    }
  }

  inputEquals() {
    const result = this.result;
    if (result !== '' && this._expression.length > 1) {
      this.addToHistory(`${this.expression} = ${result}`);
      this.dispatchEvent(new CustomEvent(changeEvent));
      this._expression = [result];
      this.bracketsCount = 0;
    }
  }

  changeSign() {
    let lastAction = this.getLastAction();
    if (lastAction !== undefined) {
      if (isNumeric(lastAction)) {
        lastAction =
          lastAction[0] === Operations.SUBTRACT
            ? lastAction.slice(1)
            : Operations.SUBTRACT + lastAction;
        this._expression[this._expression.length - 1] = lastAction;
        this.dispatchEvent(new CustomEvent(changeEvent));
      }
      if (lastAction === Operations.ADD) {
        this._expression[this._expression.length - 1] = Operations.SUBTRACT;
        this.dispatchEvent(new CustomEvent(changeEvent));
      }
      if (lastAction === Operations.SUBTRACT) {
        this._expression[this._expression.length - 1] = Operations.ADD;
        this.dispatchEvent(new CustomEvent(changeEvent));
      }
    }
  }

  clearEntry() {
    if (this._expression.length > 0) {
      const lastAction = this._expression.pop();
      if (lastAction === Brackets.openingBracket) {
        this.bracketsCount -= 1;
      }
      if (lastAction === Brackets.closingBracket) {
        this.bracketsCount += 1;
      }
      this.dispatchEvent(new CustomEvent(changeEvent));
    }
  }

  clearAll() {
    this._expression = [];
    this.bracketsCount = 0;
    this.dispatchEvent(new CustomEvent(changeEvent));
  }

  getLastAction() {
    if (this._expression.length > 0) {
      return this._expression[this._expression.length - 1];
    }
  }
}
