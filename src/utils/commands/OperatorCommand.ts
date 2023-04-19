import { Command } from './Command';
import { type Operators } from '@constants/operators';

export class OperatorCommand extends Command {
  execute() {
    this.calculator.inputOperator(this.value as Operators);
  }
}
