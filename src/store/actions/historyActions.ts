export enum HistoryActionTypes {
  ADD = 'ADD',
  CLEAR = 'CLEAR',
}

export interface HistoryAction {
  type: 'ADD' | 'CLEAR';
  payload?: string;
}

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
