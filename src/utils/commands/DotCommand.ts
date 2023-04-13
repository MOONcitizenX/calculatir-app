import { Command } from './Command';

export class DotCommand extends Command {
  execute() {
    this.calculator.inputDot();
  }
}
