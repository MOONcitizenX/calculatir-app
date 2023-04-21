import { Component } from 'react';
import { ClearHistoryButtonCC } from '@components/ClearHistoryButton';
import { ThemeSwitcherCC } from '@components/ThemeSwitcher';
import { StyledTitle } from '@styles/shared';
import { CalculatorWrapper, StyledCalculator } from '@components/Calculator/Calculator.style';

export class SettingsCC extends Component {
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
