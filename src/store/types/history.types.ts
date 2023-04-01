export enum HistoryActionTypes {
  ADD = 'ADD',
  CLEAR = 'CLEAR',
}

export interface HistoryAction {
  type: 'ADD' | 'CLEAR';
  payload?: string;
}

export type HistoryState = string[];
