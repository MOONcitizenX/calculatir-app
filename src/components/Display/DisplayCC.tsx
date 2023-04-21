import React, { Component } from 'react';
import { type AnyAction, type Dispatch } from 'redux';
import { connect, type ConnectedProps } from 'react-redux';
import { CalculatorContext } from '@components/CalculatorProvider';
import { type RootState } from '@store/reducers';
import { changeDisplayExpression, changeDisplayResult } from '@store/actions/displayActions';
import { changeEvent } from '@constants/calculatorEvent';
import { StyledDisplay, StyledExpression, StyledResult } from './Display.style';
import { type Calculator } from '@utils/Calculator';

const mapState = (state: RootState) => ({
  expression: state.display.expression,
  result: state.display.result,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    changeDisplayExpression: (expression: string) => {
      dispatch(changeDisplayExpression(expression));
    },
    changeDisplayResult: (result: string) => {
      dispatch(changeDisplayResult(result));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type DisplayProps = ConnectedProps<typeof connector>;

class Display extends Component<DisplayProps> {
  static contextType = CalculatorContext;
  declare context: React.ContextType<typeof CalculatorContext>;
  private oldCalculator: Calculator;

  constructor(props: DisplayProps, context: React.ContextType<typeof CalculatorContext>) {
    super(props, context);
    this.oldCalculator = this.context!.calculator;
  }

  updateOnChange = () => {
    const { calculator } = this.context!;
    const { changeDisplayExpression, changeDisplayResult } = this.props;
    changeDisplayExpression(calculator.expression);
    changeDisplayResult(calculator.calculateResult());
  };

  componentDidMount(): void {
    const { calculator } = this.context!;
    calculator.addEventListener(changeEvent, this.updateOnChange);
  }

  componentDidUpdate(): void {
    const { calculator } = this.context!;
    if (calculator !== this.oldCalculator) {
      this.oldCalculator.removeEventListener(changeEvent, this.updateOnChange);
      calculator.addEventListener(changeEvent, this.updateOnChange);
      this.oldCalculator = calculator;
    }
  }

  componentWillUnmount(): void {
    const { calculator } = this.context!;
    calculator.removeEventListener(changeEvent, this.updateOnChange);
  }

  render() {
    const { expression, result } = this.props;
    return (
      <StyledDisplay>
        <StyledExpression data-testid="expression">{expression}</StyledExpression>
        <StyledResult data-testid="result">{result}</StyledResult>
      </StyledDisplay>
    );
  }
}

export const DisplayCC = connector(Display);
