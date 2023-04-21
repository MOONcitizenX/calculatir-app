import { Component } from 'react';
import { ControlPanelCC } from '@components/ControlPanel';
import { DisplayCC } from '@components/Display';
import { HistoryCC } from '@components/History';
import { KeypadCC } from '@components/Keypad';
import { CalculatorWrapper, StyledCalculator } from './Calculator.style';

interface CalculatorCCState {
  isHistoryOpen: boolean;
}

export class CalculatorCC extends Component<Record<string, unknown>, CalculatorCCState> {
  state = {
    isHistoryOpen: false,
  };

  toggleHistory = () => {
    this.setState((prevState) => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }));
  };

  render() {
    return (
      <CalculatorWrapper>
        <StyledCalculator>
          <DisplayCC />
          <KeypadCC />
          <HistoryCC isHistoryOpen={this.state.isHistoryOpen} />
          <ControlPanelCC
            toggleHistory={this.toggleHistory}
            isHistoryOpen={this.state.isHistoryOpen}
          />
        </StyledCalculator>
      </CalculatorWrapper>
    );
  }
}
