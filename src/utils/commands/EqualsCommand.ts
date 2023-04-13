import { Command } from './Command';

export class EqualsCommand extends Command {
  execute() {
    this.calculator.inputEquals();
  }
}
