import { isNumeric } from './helpers/isNumeric';
import { calculate } from './helpers/calculate';
import { getPolishToken } from './helpers/getPolishToken';
import { changeEvent, equalsEvent } from '@constants/calculatorEvent';
import { CalculatorErrors, maxEntryLength } from '@constants/calculatorErrors';
import { Brackets, Operations, type Operator, OperatorsArray } from '@constants/operators';

export class Calculator extends EventTarget {
  private _expression: string[] = [];
  private openBracketsCount = 0;

  get expression() {
    const expression = this._expression.join(' ');
    return expression.length > 0 ? expression : '0';
  }

  calculateResult() {
    if (this.openBracketsCount === 0) {
      const { polishToken, isSolvable } = getPolishToken(this._expression);
      if (isSolvable) {
        return calculate(polishToken);
      }
    }
    return '';
  }

  inputDigit(digit: string) {
    if (this.hasError() || this.isTooLong()) {
      return;
    }

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
    if (this.hasError() || this.isTooLong()) {
      return;
    }

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
    if (this.hasError()) {
      return;
    }

    const lastAction = this.getLastAction();
    if (lastAction !== undefined) {
      if (isNumeric(lastAction) || lastAction === Brackets.CLOSE_BRACKET) {
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
    if (this.hasError()) {
      return;
    }

    const lastAction = this.getLastAction();
    const canInputOpeningBracket =
      (lastAction === undefined || OperatorsArray.includes(lastAction as Operator)) &&
      bracket === Brackets.OPEN_BRACKET;
    if (canInputOpeningBracket) {
      this._expression.push(bracket);
      this.openBracketsCount += 1;
      this.dispatchEvent(new CustomEvent(changeEvent));
      return;
    }
    const canInputClosingBracket =
      lastAction !== undefined &&
      lastAction !== Brackets.OPEN_BRACKET &&
      !OperatorsArray.includes(lastAction as Operator) &&
      this.openBracketsCount > 0 &&
      bracket === Brackets.CLOSE_BRACKET;
    if (canInputClosingBracket) {
      this._expression.push(bracket);
      this.openBracketsCount -= 1;
      this.dispatchEvent(new CustomEvent(changeEvent));
    }
  }

  inputEquals() {
    if (this.hasError()) {
      return;
    }

    const result = this.calculateResult();
    if (result !== '' && this._expression.length > 1) {
      this.dispatchEvent(new CustomEvent(changeEvent));
      this.dispatchEvent(
        new CustomEvent(equalsEvent, {
          detail: {
            expression: this.expression,
            result,
          },
        })
      );
      this._expression = [result];
      this.openBracketsCount = 0;
    }
  }

  changeSign() {
    if (this.hasError()) {
      return;
    }

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
      if (lastAction === Brackets.OPEN_BRACKET) {
        this.openBracketsCount -= 1;
      }
      if (lastAction === Brackets.CLOSE_BRACKET) {
        this.openBracketsCount += 1;
      }
      this.dispatchEvent(new CustomEvent(changeEvent));
    }
  }

  clearAll() {
    this._expression = [];
    this.openBracketsCount = 0;
    this.dispatchEvent(new CustomEvent(changeEvent));
  }

  private getLastAction() {
    if (this._expression.length > 0) {
      return this._expression[this._expression.length - 1];
    }
  }

  private hasError() {
    const result = this.calculateResult();
    if (result === CalculatorErrors.ERROR || result === CalculatorErrors.TOO_BIG) {
      return true;
    }
    return false;
  }

  private isTooLong() {
    const lastAction = this.getLastAction();
    if (lastAction !== undefined && lastAction.length >= maxEntryLength) {
      return true;
    }
    return false;
  }
}
