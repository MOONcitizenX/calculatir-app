import { Command } from './Command';

export class ClearAllCommand extends Command {
  execute() {
    this.calculator.clearAll();
  }
}
