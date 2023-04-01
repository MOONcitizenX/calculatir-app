import {
  type HistoryAction,
  type HistoryState,
  HistoryActionTypes,
} from '@store/types/history.types';

const initialHistory: HistoryState = [];

export const historyReducer = (state = initialHistory, action: HistoryAction) => {
  switch (action.type) {
    case HistoryActionTypes.ADD:
      return [...state, action.payload];
    case HistoryActionTypes.CLEAR:
      return [];
    default:
      return state;
  }
};
