import { ThemeSwitcherFC } from '@components/ThemeSwitcher/ThemeSwitcherFC';
import { CalculatorWrapper, StyledCalculator } from '@styles/components/Calculator.style';
import { StyledClearButton } from '@styles/components/Settings.style';
import { StyledTitle } from '@styles/components/shared/shared';

export const SettingsPageFC = () => {
  return (
    <CalculatorWrapper>
      <StyledCalculator>
        <StyledTitle>Settings</StyledTitle>
        <ThemeSwitcherFC />
        <StyledClearButton>Clear history</StyledClearButton>
      </StyledCalculator>
    </CalculatorWrapper>
  );
};
