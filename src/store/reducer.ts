import {ActionCreator, Reducer} from "redux";
import {ME_REQUEST_ERROR, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";

const SET_TOKEN = 'SET_TOKEN';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type RootState = {
  comment: string;
  token: string;
  me: MeState;
}
const initialState = {
  comment: 'Привет from matve!!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string,
}
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string,
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        comment: action.text,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'ME_REQUEST':
    case 'ME_REQUEST_SUCCESS':
    case 'ME_REQUEST_ERROR':
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default:
      return state;
  }
}
