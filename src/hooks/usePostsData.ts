import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {postsRequestAsync} from "../store/posts/actions";
import {PostData} from "../store/posts/reducer";

export function usePostsData() {

  const posts = useSelector<RootState, Array<PostData>>(state => state.posts)
  const token = useSelector<RootState, string>(state => state.token)

  const dispatch = useDispatch();

  useEffect(() => {
    if (token === 'undefined' || token.length === 0) return;
    // @ts-ignore
    dispatch(postsRequestAsync());
  }, [token]);

  return {
    posts
  };
}
