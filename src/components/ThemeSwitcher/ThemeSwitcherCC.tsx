import { Component } from 'react';
import { type AnyAction, type Dispatch } from 'redux';
import { connect, type ConnectedProps } from 'react-redux';
import { type RootState } from '@store/reducers';
import { setLightTheme, setDarkTheme, setColoredTheme } from '@store/actions/themeActions';
import { StyledLabel, StyledSwitch, SwitcherWrapper } from './ThemeSwitcher.style';

const mapState = (state: RootState) => ({
  currentTheme: state.theme.name,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    setLightTheme: () => {
      dispatch(setLightTheme());
    },
    setDarkTheme: () => {
      dispatch(setDarkTheme());
    },
    setColoredTheme: () => {
      dispatch(setColoredTheme());
    },
  };
};

const connector = connect(mapState, mapDispatch);

type ThemeSwitcherProps = ConnectedProps<typeof connector>;

class ThemeSwitcher extends Component<ThemeSwitcherProps> {
  render() {
    const { setLightTheme, setDarkTheme, setColoredTheme, currentTheme } = this.props;
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
  }
}

export const ThemeSwitcherCC = connector(ThemeSwitcher);
