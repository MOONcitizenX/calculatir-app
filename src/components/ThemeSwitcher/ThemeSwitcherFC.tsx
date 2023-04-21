import { useTypedActions } from '@hooks/useTypedActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { StyledLabel, StyledSwitch, SwitcherWrapper } from './ThemeSwitcher.style';

export const ThemeSwitcherFC = () => {
  const currentTheme = useTypedSelector((state) => state.theme.name);
  const { setLightTheme, setDarkTheme, setColoredTheme } = useTypedActions();

  return (
    <SwitcherWrapper>
      <StyledLabel>
        <input
          type="radio"
          name="theme"
          onChange={setLightTheme}
          checked={currentTheme === 'light'}
        />
        <StyledSwitch data-testid="light-theme-switch">Light</StyledSwitch>
      </StyledLabel>

      <StyledLabel>
        <input
          type="radio"
          name="theme"
          onChange={setDarkTheme}
          checked={currentTheme === 'dark'}
        />
        <StyledSwitch data-testid="dark-theme-switch">Dark</StyledSwitch>
      </StyledLabel>

      <StyledLabel>
        <input
          type="radio"
          name="theme"
          onChange={setColoredTheme}
          checked={currentTheme === 'colored'}
        />
        <StyledSwitch data-testid="colored-theme-switch">Colored</StyledSwitch>
      </StyledLabel>
    </SwitcherWrapper>
  );
};
