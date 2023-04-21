import React, { Component } from 'react';
import { Operations } from '@constants/operators';
import {
  ClearAllCommand,
  BracketCommand,
  ChangeSignCommand,
  ClearEntryCommand,
  DigitCommand,
  DotCommand,
  EqualsCommand,
  OperatorCommand,
} from '@utils/commands';
import { CalculatorContext } from '@components/CalculatorProvider';
import { StyledKeypadButton } from '@styles/shared';
import { KeypadWrapper } from './Keypad.style';

export class KeypadCC extends Component {
  static contextType = CalculatorContext;
  declare context: React.ContextType<typeof CalculatorContext>;

  render() {
    const { calculator } = this.context!;
    return (
      <KeypadWrapper>
        <StyledKeypadButton
          data-testid={Operations.CLEAR_ALL}
          $isSecondary
          $isWide
          onClick={() => {
            new ClearAllCommand(calculator).execute();
          }}
        >
          {Operations.CLEAR_ALL}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.CLEAR_ENTRY}
          $isSecondary
          onClick={() => {
            new ClearEntryCommand(calculator).execute();
          }}
        >
          {Operations.CLEAR_ENTRY}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.CHANGE_SIGN}
          $isSecondary
          onClick={() => {
            new ChangeSignCommand(calculator).execute();
          }}
        >
          {Operations.CHANGE_SIGN}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.MODULUS}
          $isSecondary
          onClick={() => {
            new OperatorCommand(calculator, Operations.MODULUS).execute();
          }}
        >
          {Operations.MODULUS}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="7"
          onClick={() => {
            new DigitCommand(calculator, '7').execute();
          }}
        >
          7
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="8"
          onClick={() => {
            new DigitCommand(calculator, '8').execute();
          }}
        >
          8
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="9"
          onClick={() => {
            new DigitCommand(calculator, '9').execute();
          }}
        >
          9
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.BRACKETS_OPEN}
          $isSecondary
          onClick={() => {
            new BracketCommand(calculator, Operations.BRACKETS_OPEN).execute();
          }}
        >
          {Operations.BRACKETS_OPEN}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.BRACKETS_CLOSE}
          $isSecondary
          onClick={() => {
            new BracketCommand(calculator, Operations.BRACKETS_CLOSE).execute();
          }}
        >
          {Operations.BRACKETS_CLOSE}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="4"
          onClick={() => {
            new DigitCommand(calculator, '4').execute();
          }}
        >
          4
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="5"
          onClick={() => {
            new DigitCommand(calculator, '5').execute();
          }}
        >
          5
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="6"
          onClick={() => {
            new DigitCommand(calculator, '6').execute();
          }}
        >
          6
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.MULTIPLY}
          $isSecondary
          onClick={() => {
            new OperatorCommand(calculator, Operations.MULTIPLY).execute();
          }}
        >
          {Operations.MULTIPLY}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.DIVIDE}
          $isSecondary
          onClick={() => {
            new OperatorCommand(calculator, Operations.DIVIDE).execute();
          }}
        >
          {Operations.DIVIDE}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="1"
          onClick={() => {
            new DigitCommand(calculator, '1').execute();
          }}
        >
          1
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="2"
          onClick={() => {
            new DigitCommand(calculator, '2').execute();
          }}
        >
          2
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="3"
          onClick={() => {
            new DigitCommand(calculator, '3').execute();
          }}
        >
          3
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.ADD}
          $isSecondary
          onClick={() => {
            new OperatorCommand(calculator, Operations.ADD).execute();
          }}
        >
          {Operations.ADD}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.SUBTRACT}
          $isSecondary
          onClick={() => {
            new OperatorCommand(calculator, Operations.SUBTRACT).execute();
          }}
        >
          {Operations.SUBTRACT}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid="0"
          $isWide
          onClick={() => {
            new DigitCommand(calculator, '0').execute();
          }}
        >
          0
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.DOT}
          $isSecondary
          onClick={() => {
            new DotCommand(calculator, Operations.DOT).execute();
          }}
        >
          {Operations.DOT}
        </StyledKeypadButton>

        <StyledKeypadButton
          data-testid={Operations.EQUALS}
          $isSecondary
          $isWide
          onClick={() => {
            new EqualsCommand(calculator, Operations.EQUALS).execute();
          }}
        >
          {Operations.EQUALS}
        </StyledKeypadButton>
      </KeypadWrapper>
    );
  }
}
