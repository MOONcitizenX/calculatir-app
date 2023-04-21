import React, { Component } from 'react';
import { type AnyAction, type Dispatch } from 'redux';
import { connect, type ConnectedProps } from 'react-redux';
import { CalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { type RootState } from '@store/reducers';
import { changeDisplayExpression, changeDisplayResult } from '@store/actions/displayActions';
import { changeEvent } from '@constants/calculatorEvent';
import { StyledDisplay, StyledExpression, StyledResult } from './Display.style';

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

  updateOnChange = () => {
    const { calculator } = this.context!;
    const { changeDisplayExpression, changeDisplayResult } = this.props;
    const expression = calculator.expression;
    changeDisplayExpression(expression.length > 0 ? expression : '0');
    const result = calculator.result;
    changeDisplayResult(result.length > 0 ? result : '');
  };

  componentDidMount(): void {
    const { calculator } = this.context!;
    calculator.addEventListener(changeEvent, this.updateOnChange);
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
