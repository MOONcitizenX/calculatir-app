import * as HistoryActions from '@store/actions/historyActions';
import * as ThemeActions from '@store/actions/themeActions';

const { addHistory, clearHistory } = HistoryActions;
const { setColoredTheme, setDarkTheme, setLightTheme } = ThemeActions;

const Actions = {
  addHistory,
  clearHistory,
  setColoredTheme,
  setDarkTheme,
  setLightTheme,
};

export default Actions;
