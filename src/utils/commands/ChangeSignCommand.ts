import { Command } from './Command';

export class ChangeSignCommand extends Command {
  execute() {
    this.calculator.changeSign();
  }
}
