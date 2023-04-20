import { Command } from './Command';

export class ClearEntryCommand extends Command {
  execute() {
    this.calculator.clearEntry();
  }
}
