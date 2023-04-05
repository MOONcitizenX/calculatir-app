export enum OPERATIONS {
  CLEAR_ALL = 'AC',
  CLEAR_ENTRY = 'C',
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  DOT = '.',
  EQUALS = '=',
  BRACKETS = '( )',
  MODULUS = '%',
  CHANGE_SIGN = '+/-',
}

export interface Button {
  key: string | number;
  isSecondary: boolean;
}

export const buttons: Button[] = [
  {
    key: OPERATIONS.CLEAR_ALL,
    isSecondary: true,
  },
  {
    key: OPERATIONS.CHANGE_SIGN,
    isSecondary: true,
  },
  {
    key: OPERATIONS.MODULUS,
    isSecondary: true,
  },
  {
    key: OPERATIONS.DIVIDE,
    isSecondary: true,
  },
  {
    key: 7,
    isSecondary: false,
  },
  {
    key: 8,
    isSecondary: false,
  },
  {
    key: 9,
    isSecondary: false,
  },
  {
    key: OPERATIONS.MULTIPLY,
    isSecondary: true,
  },
  { key: 4, isSecondary: false },
  {
    key: 5,
    isSecondary: false,
  },
  {
    key: 6,
    isSecondary: false,
  },
  {
    key: OPERATIONS.SUBTRACT,
    isSecondary: true,
  },
  {
    key: 1,
    isSecondary: false,
  },
  {
    key: 2,
    isSecondary: false,
  },
  {
    key: 3,
    isSecondary: false,
  },
  {
    key: OPERATIONS.ADD,
    isSecondary: true,
  },
  {
    key: 0,
    isSecondary: false,
  },

  {
    key: OPERATIONS.BRACKETS,
    isSecondary: false,
  },
  {
    key: OPERATIONS.DOT,
    isSecondary: false,
  },
  {
    key: OPERATIONS.EQUALS,
    isSecondary: true,
  },
];
