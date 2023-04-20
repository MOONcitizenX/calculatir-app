import { combineReducers } from 'redux';
import { historyReducer } from './historyReducer';
import { themeReducer } from './themeReducer';
import { displayReducer } from './displayReducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  history: historyReducer,
  display: displayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
