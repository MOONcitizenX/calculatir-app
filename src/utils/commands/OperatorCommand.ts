import { Command } from './Command';
import { type Operators } from '@constants/Operators';

export class OperatorCommand extends Command {
  execute() {
    this.calculator.inputOperator(this.value as Operators);
  }
}
