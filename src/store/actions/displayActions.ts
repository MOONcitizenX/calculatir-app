export enum DisplayActionTypes {
  CHANGE_EXPRESSION = 'CHANGE_EXPRESSION',
  CHANGE_RESULT = 'CHANGE_RESULT',
}

export interface DisplayAction {
  type: DisplayActionTypes;
  payload: string;
}

export const changeDisplayExpression = (item: string): DisplayAction => {
  return {
    type: DisplayActionTypes.CHANGE_EXPRESSION,
    payload: item,
  };
};

export const changeDisplayResult = (item: string): DisplayAction => {
  return {
    type: DisplayActionTypes.CHANGE_RESULT,
    payload: item,
  };
};
