import { ControlPanelCC } from '@components/ControlPanel/ControlPanelCC';
import { DisplayCC } from '@components/Display/DisplayCC';
import { HistoryCC } from '@components/History/HistoryCC';
import { KeypadCC } from '@components/Keypad/KeypadCC';
import { CalculatorWrapper, StyledCalculator } from '@styles/components/Calculator.style';
import { Component } from 'react';

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
