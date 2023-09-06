import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {commentRequestAsync} from "../store/comments/actions";

export function useComments(subreddit: string, postId: string) {
  // const token = useSelector<RootState, string>(state => state.token)
  // const [comments, setComments] = useState([]);
  // useEffect(() => {
  //   if (token === 'undefined') return;
  //   axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${postId}`, {
  //     headers: {
  //       Authorization: `bearer ${token}`
  //     }
  //   })
  //     .then((resp) => {
  //       setComments(resp.data[1].data.children)
  //     })
  //     .catch(console.log)
  // }, []);
  // return comments;

  const comments = useSelector<RootState, Array<any>>(state => state.comments)
  const token = useSelector<RootState, string>(state => state.token)

  const dispatch = useDispatch();
  useEffect(() => {
    if (token === 'undefined') return;
    // @ts-ignore
    dispatch(commentRequestAsync(subreddit, postId))
  }, [])


  return {
    comments,
  }

}
