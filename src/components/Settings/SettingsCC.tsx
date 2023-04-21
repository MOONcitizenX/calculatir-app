import { Component } from 'react';
import { ClearHistoryButtonCC } from '@components/ClearHistoryButton/ClearHistoryButtonCC';
import { ThemeSwitcherCC } from '@components/ThemeSwitcher/ThemeSwitcherCC';
import { StyledTitle } from '@styles/shared';
import { CalculatorWrapper, StyledCalculator } from '@components/Calculator/Calculator.style';

export class SettingsCC extends Component {
  render() {
    return (
      <CalculatorWrapper>
        <StyledCalculator data-testid="calculator">
          <StyledTitle>Settings</StyledTitle>
          <ThemeSwitcherCC />
          <ClearHistoryButtonCC />
        </StyledCalculator>
      </CalculatorWrapper>
    );
  }
}
