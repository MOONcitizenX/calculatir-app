import { Component } from 'react';
import { ThemeSwitcherCC } from '@components/ThemeSwitcher/ThemeSwitcherCC';
import { CalculatorWrapper, StyledCalculator } from '@styles/components/Calculator.style';
import { StyledClearButton } from '@styles/components/Settings.style';
import { StyledTitle } from '@styles/components/shared/shared';

export class SettingsPageCC extends Component {
  render() {
    return (
      <CalculatorWrapper>
        <StyledCalculator>
          <StyledTitle>Settings</StyledTitle>
          <ThemeSwitcherCC />
          <StyledClearButton>Clear history</StyledClearButton>
        </StyledCalculator>
      </CalculatorWrapper>
    );
  }
}
