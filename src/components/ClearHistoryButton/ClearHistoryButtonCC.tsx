import React, { Component } from 'react';
import { type Dispatch, type AnyAction } from 'redux';
import { connect, type ConnectedProps } from 'react-redux';
import { CalculatorContext } from '@components/CalculatorProvider/CalculatorProvider';
import { changeDisplayExpression, changeDisplayResult } from '@store/actions/displayActions';
import { clearHistory } from '@store/actions/historyActions';
import { StyledClearButton } from './ClearHistoryButton.style';

const mapState = () => ({});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    changeDisplayExpression: (expression: string) => {
      dispatch(changeDisplayExpression(expression));
    },
    changeDisplayResult: (result: string) => {
      dispatch(changeDisplayResult(result));
    },
    clearHistory: () => {
      dispatch(clearHistory());
    },
  };
};

const connector = connect(mapState, mapDispatch);

type ClearHistoryButtonProps = ConnectedProps<typeof connector>;

class ClearHistoryButton extends Component<ClearHistoryButtonProps> {
  static contextType = CalculatorContext;
  declare context: React.ContextType<typeof CalculatorContext>;

  resetAllHistory = () => {
    const { calculator } = this.context!;
    const { clearHistory, changeDisplayExpression, changeDisplayResult } = this.props;
    calculator.clearAll();
    changeDisplayExpression('0');
    changeDisplayResult('0');
    clearHistory();
  };

  render() {
    return <StyledClearButton onClick={this.resetAllHistory}>Clear history</StyledClearButton>;
  }
}

export const ClearHistoryButtonCC = connector(ClearHistoryButton);
