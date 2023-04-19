import { type Brackets, type Operator } from '@constants/operators';
import { type Calculator } from '@utils/Calculator';

export abstract class Command {
  calculator: Calculator;
  value?: string | Brackets | Operator;
  constructor(calculator: Calculator, value?: string) {
    this.calculator = calculator;
    this.value = value;
  }

  abstract execute(): void;
}
