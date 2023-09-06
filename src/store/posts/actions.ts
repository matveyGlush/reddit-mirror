import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";
import {PostData} from "./reducer";

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const POSTS_REQUEST = 'POSTS_REQUEST';

export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
}
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  posts: PostData;
}
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string,
}

export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_REQUEST,
});
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (posts: PostData) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts,
});
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(postsRequest())
  axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=4', {
    headers: {
      Authorization: `bearer ${getState().token}`
    }
  })
    .then((resp) => {
      dispatch(postsRequestSuccess(resp.data.data.children));
    })
    .catch(error => {
      console.log(error);
      dispatch(postsRequestError(String(error))) ;
    });
}
