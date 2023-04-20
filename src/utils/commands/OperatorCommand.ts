import { type Operator } from '@constants/operators';
import { Command } from './Command';

export class OperatorCommand extends Command {
  execute() {
    this.calculator.inputOperator(this.value as Operator);
  }
}
