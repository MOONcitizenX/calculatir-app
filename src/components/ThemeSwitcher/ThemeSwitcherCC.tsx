import { setLightTheme, setDarkTheme, setColoredTheme } from '@store/actions/themeActions';
import { type RootState } from '@store/reducers';
import { StyledLabel, StyledSwitch, SwitcherWrapper } from '@styles/components/Settings.style';
import { Component } from 'react';
import { connect, type ConnectedProps } from 'react-redux';
import { type AnyAction, type Dispatch } from 'redux';

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

type ThemeSwitcherCCProps = ConnectedProps<typeof connector>;

class ThemeSwitcher extends Component<ThemeSwitcherCCProps> {
  render() {
    return (
      <SwitcherWrapper>
        <StyledLabel>
          <input
            type="radio"
            name="theme"
            onChange={this.props.setLightTheme}
            checked={this.props.currentTheme === 'light'}
          />
          <StyledSwitch>Light</StyledSwitch>
        </StyledLabel>

        <StyledLabel>
          <input
            type="radio"
            name="theme"
            onChange={this.props.setDarkTheme}
            checked={this.props.currentTheme === 'dark'}
          />
          <StyledSwitch>Dark</StyledSwitch>
        </StyledLabel>

        <StyledLabel>
          <input
            type="radio"
            name="theme"
            onChange={this.props.setColoredTheme}
            checked={this.props.currentTheme === 'colored'}
          />
          <StyledSwitch>Colored</StyledSwitch>
        </StyledLabel>
      </SwitcherWrapper>
    );
  }
}

export const ThemeSwitcherCC = connector(ThemeSwitcher);
