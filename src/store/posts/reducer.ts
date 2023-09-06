import {Reducer} from "react";
import {
  POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction
} from "./actions";

export type PostData = {
  data: {
    id: string,
    author: string,
    title: string,
    downs: number,
    ups: number,
    preview: Preview,
    created_utc: number,
    postId: string,
    subreddit: string,
  }
}

type PostActions = PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;

export const postsReducer: Reducer<Array<PostData>, PostActions> = (state, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
      }
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
      }
    default:
      return state;
  }
}
