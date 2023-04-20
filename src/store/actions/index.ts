import * as HistoryActions from '@store/actions/historyActions';
import * as ThemeActions from '@store/actions/themeActions';
import * as DisplayActions from '@store/actions/displayActions';

const { addHistory, clearHistory } = HistoryActions;
const { setColoredTheme, setDarkTheme, setLightTheme } = ThemeActions;
const { changeDisplayExpression, changeDisplayResult } = DisplayActions;

const Actions = {
  addHistory,
  clearHistory,
  setColoredTheme,
  setDarkTheme,
  setLightTheme,
  changeDisplayExpression,
  changeDisplayResult,
};

export default Actions;
