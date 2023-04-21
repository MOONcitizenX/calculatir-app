import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { StyledLabel, StyledSwitch, SwitcherWrapper } from './ThemeSwitcher.style';

export const ThemeSwitcherFC = () => {
  const currentTheme = useTypedSelector((state) => state.theme.name);
  const { setLightTheme, setDarkTheme, setColoredTheme } = useActions();

  return (
    <SwitcherWrapper>
      <StyledLabel>
        <input
          data-testid="light-theme-switch"
          type="radio"
          name="theme"
          onChange={setLightTheme}
          checked={currentTheme === 'light'}
        />
        <StyledSwitch>Light</StyledSwitch>
      </StyledLabel>

      <StyledLabel>
        <input
          data-testid="dark-theme-switch"
          type="radio"
          name="theme"
          onChange={setDarkTheme}
          checked={currentTheme === 'dark'}
        />
        <StyledSwitch>Dark</StyledSwitch>
      </StyledLabel>

      <StyledLabel>
        <input
          data-testid="colored-theme-switch"
          type="radio"
          name="theme"
          onChange={setColoredTheme}
          checked={currentTheme === 'colored'}
        />
        <StyledSwitch>Colored</StyledSwitch>
      </StyledLabel>
    </SwitcherWrapper>
  );
};
