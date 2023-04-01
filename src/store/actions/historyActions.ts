import { type HistoryAction, HistoryActionTypes } from '@store/types/history.types';

export const addHistory = (item: string): HistoryAction => {
  return {
    type: HistoryActionTypes.ADD,
    payload: item,
  };
};

export const clearHistory = (): HistoryAction => {
  return {
    type: HistoryActionTypes.CLEAR,
  };
};
