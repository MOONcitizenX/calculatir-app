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
          type="radio"
          name="theme"
          onChange={setLightTheme}
          checked={currentTheme === 'light'}
        />
        <StyledSwitch>Light</StyledSwitch>
      </StyledLabel>

      <StyledLabel>
        <input
          type="radio"
          name="theme"
          onChange={setDarkTheme}
          checked={currentTheme === 'dark'}
        />
        <StyledSwitch>Dark</StyledSwitch>
      </StyledLabel>

      <StyledLabel>
        <input
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
