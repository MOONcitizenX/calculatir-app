import { ClearHistoryButtonFC } from '@components/ClearHistoryButton/ClearHistoryButtonFC';
import { ThemeSwitcherFC } from '@components/ThemeSwitcher/ThemeSwitcherFC';
import { StyledTitle } from '@styles/shared';
import { CalculatorWrapper, StyledCalculator } from '@components/Calculator/Calculator.style';

export const SettingsFC = () => {
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
