import {Action, ActionCreator, Reducer} from "redux";
import {ME_REQUEST_ERROR, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {ThunkAction} from "redux-thunk";
import {useEffect} from "react";
import {PostData, postsReducer} from "./posts/reducer";
import {PostsRequestAction, PostsRequestErrorAction, PostsRequestSuccessAction} from "./posts/actions";
import {
  CommentRequestAction,
  CommentRequestErrorAction,
  CommentRequestSuccessAction
} from "./comments/actions";
import {commentReducer} from "./comments/reducer";

const SET_TOKEN = 'SET_TOKEN';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type RootState = {
  comment: string;
  token: string;
  me: MeState;
  posts: Array<PostData>;
  comments: Array<any>;
}
const initialState: RootState = {
  comment: 'Привет from matve!!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
  posts: [],
  comments: []
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

export const saveToken = () : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  const token = localStorage.getItem('token') || window.__token__;
  dispatch(setToken(token));
  if (token !== 'undefined') localStorage.setItem('token', token);
}

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | PostsRequestAction
  | PostsRequestErrorAction
  | PostsRequestSuccessAction
  | CommentRequestAction
  | CommentRequestSuccessAction
  | CommentRequestErrorAction;

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
    case 'POSTS_REQUEST':
    case 'POSTS_REQUEST_SUCCESS':
    case 'POSTS_REQUEST_ERROR':
      return {
        ...state,
        posts: postsReducer(state.posts, action)
      }
    case 'COMMENT_REQUEST':
    case 'COMMENT_REQUEST_SUCCESS':
    case 'COMMENT_REQUEST_ERROR':
      return {
        ...state,
        comments: commentReducer(state.comments, action)
      }
    default:
      return state;
  }
}
