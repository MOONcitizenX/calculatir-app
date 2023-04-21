import { ClearHistoryButtonFC } from '@components/ClearHistoryButton';
import { ThemeSwitcherFC } from '@components/ThemeSwitcher';
import { StyledTitle } from '@styles/shared';
import { CalculatorWrapper, StyledCalculator } from '@components/Calculator/Calculator.style';

export const SettingsFC = () => {
  return (
    <CalculatorWrapper>
      <StyledCalculator data-testid="calculator">
        <StyledTitle>Settings</StyledTitle>
        <ThemeSwitcherFC />
        <ClearHistoryButtonFC />
      </StyledCalculator>
    </CalculatorWrapper>
  );
};
