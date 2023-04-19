import { type Brackets } from '@constants/operators';
import { Command } from './Command';

export class BracketCommand extends Command {
  execute() {
    if (this.value !== undefined) {
      this.calculator.inputBracket(this.value as Brackets);
    }
  }
}
