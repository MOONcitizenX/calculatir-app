import { ThemeSwitcherFC } from '@components/ThemeSwitcher/ThemeSwitcherFC';
import { ClearHistoryButtonFC } from '@components/ClearHistoryButton/ClearHistoryButtonFC';
import { CalculatorWrapper, StyledCalculator } from '@styles/components/Calculator.style';
import { StyledTitle } from '@styles/components/shared/shared';

export const SettingsPageFC = () => {
  return (
    <CalculatorWrapper>
      <StyledCalculator>
        <StyledTitle>Settings</StyledTitle>
        <ThemeSwitcherFC />
        <ClearHistoryButtonFC />
      </StyledCalculator>
    </CalculatorWrapper>
  );
};
