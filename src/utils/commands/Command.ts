import { type Brackets, type Operator } from '@constants/Operators';
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
