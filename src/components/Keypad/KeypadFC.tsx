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
import { useCalculatorContext } from '@components/CalculatorProvider';
import { Operations } from '@constants/operators';
import { StyledKeypadButton } from '@styles/shared';
import { KeypadWrapper } from './Keypad.style';

export const KeypadFC = () => {
  const { calculator } = useCalculatorContext();

  return (
    <KeypadWrapper>
      <StyledKeypadButton
        $isSecondary
        $isWide
        onClick={() => {
          new ClearAllCommand(calculator).execute();
        }}
      >
        {Operations.CLEAR_ALL}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new ClearEntryCommand(calculator).execute();
        }}
      >
        {Operations.CLEAR_ENTRY}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new ChangeSignCommand(calculator).execute();
        }}
      >
        {Operations.CHANGE_SIGN}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new OperatorCommand(calculator, Operations.MODULUS).execute();
        }}
      >
        {Operations.MODULUS}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '7').execute();
        }}
      >
        {'7'}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '8').execute();
        }}
      >
        {'8'}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '9').execute();
        }}
      >
        {'9'}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new BracketCommand(calculator, Operations.BRACKETS_OPEN).execute();
        }}
      >
        {Operations.BRACKETS_OPEN}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new BracketCommand(calculator, Operations.BRACKETS_CLOSE).execute();
        }}
      >
        {Operations.BRACKETS_CLOSE}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '4').execute();
        }}
      >
        {'4'}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '5').execute();
        }}
      >
        {'5'}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '6').execute();
        }}
      >
        {'6'}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new OperatorCommand(calculator, Operations.MULTIPLY).execute();
        }}
      >
        {Operations.MULTIPLY}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new OperatorCommand(calculator, Operations.DIVIDE).execute();
        }}
      >
        {Operations.DIVIDE}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '1').execute();
        }}
      >
        {'1'}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '2').execute();
        }}
      >
        {'2'}
      </StyledKeypadButton>

      <StyledKeypadButton
        onClick={() => {
          new DigitCommand(calculator, '3').execute();
        }}
      >
        {'3'}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new OperatorCommand(calculator, Operations.ADD).execute();
        }}
      >
        {Operations.ADD}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new OperatorCommand(calculator, Operations.SUBTRACT).execute();
        }}
      >
        {Operations.SUBTRACT}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isWide
        onClick={() => {
          new DigitCommand(calculator, '0').execute();
        }}
      >
        {'0'}
      </StyledKeypadButton>

      <StyledKeypadButton
        $isSecondary
        onClick={() => {
          new DotCommand(calculator, Operations.DOT).execute();
        }}
      >
        {Operations.DOT}
      </StyledKeypadButton>

      <StyledKeypadButton
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
};
