import { Command } from './Command';

export class DigitCommand extends Command {
  execute() {
    if (this.value !== undefined) {
      this.calculator.inputDigit(this.value);
    }
  }
}
