import { type Operator } from '@constants/operators';

const add = (x: number, y: number) => {
  const result = (Math.trunc(x * 1000) + Math.trunc(y * 1000)) / 1000;
  return String(result);
};

const subtract = (y: number, x: number) => {
  const result = (Math.trunc(x * 1000) - Math.trunc(y * 1000)) / 1000;
  return String(result);
};

const multiply = (x: number, y: number) => {
  const result = (Math.trunc(x * 1000) * Math.trunc(y * 1000)) / 1000000;
  return String(result);
};

const divide = (y: number, x: number) => {
  const result = Math.trunc((x / y) * 1000) / 1000;
  return String(result);
};

const modulus = (y: number, x: number) => {
  const result = (Math.trunc(x * 1000) % Math.trunc(y * 1000)) / 1000;
  return String(result);
};

export const mathOperations: Record<Operator, (x: number, y: number) => string> = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': modulus,
};
