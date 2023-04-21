export const OperatorsArray: Operator[] = ['+', '-', '*', '/', '%'];

export type Operator = '+' | '-' | '*' | '/' | '%';

export const OperatorsPriority: Record<Operator, number> = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 2,
};

export enum Brackets {
  OPEN_BRACKET = '(',
  CLOSE_BRACKET = ')',
}

export enum Operations {
  CLEAR_ALL = 'AC',
  CLEAR_ENTRY = 'C',
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  DOT = '.',
  EQUALS = '=',
  BRACKETS_OPEN = '(',
  BRACKETS_CLOSE = ')',
  MODULUS = '%',
  CHANGE_SIGN = '+/-',
}
