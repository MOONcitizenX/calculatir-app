import { Component } from 'react';
import { ThemeSwitcherCC } from '@components/ThemeSwitcher/ThemeSwitcherCC';
import { CalculatorWrapper, StyledCalculator } from '@styles/components/Calculator.style';
import { StyledTitle } from '@styles/components/shared/shared';
import { ClearHistoryButtonCC } from '@components/ClearHistoryButton/ClearHistoryButtonCC';

export class SettingsPageCC extends Component {
  render() {
    return (
      <CalculatorWrapper>
        <StyledCalculator>
          <StyledTitle>Settings</StyledTitle>
          <ThemeSwitcherCC />
          <ClearHistoryButtonCC />
        </StyledCalculator>
      </CalculatorWrapper>
    );
  }
}
